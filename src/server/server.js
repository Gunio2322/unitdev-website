import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

// SSR handler
app.get('*', (req, res) => {
  const context = {};
  
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UnitDev - Profesjonalne Rozwiązania Programistyczne</title>
        <meta name="description" content="Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
