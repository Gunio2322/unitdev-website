import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/public (after build)
app.use(express.static(path.resolve(__dirname, './public')));

// SEO Meta Tags per route
const getMetaTags = (pathname) => {
  switch (pathname) {
    case '/':
      return {
        title: 'UnitDev - Profesjonalne Rozwiązania Programistyczne | Aplikacje Web i Mobile',
        description: 'Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise. Specjalizujemy się w React, Node.js, Cloud Solutions i AI. Ponad 500 zrealizowanych projektów.',
        keywords: 'tworzenie aplikacji, aplikacje webowe, aplikacje mobilne, React, Node.js, Cloud, AI, Machine Learning, UnitDev',
        ogTitle: 'UnitDev - Profesjonalne Rozwiązania Programistyczne',
        ogDescription: 'Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise. 15 lat doświadczenia, 500+ projektów.',
        canonical: 'https://unitdev.pl'
      };
    case '/services':
      return {
        title: 'Usługi IT - Aplikacje Web, Mobile, Cloud, AI | UnitDev',
        description: 'Oferujemy kompleksowe usługi IT: aplikacje webowe (React, Vue, Angular), mobilne (iOS, Android), Cloud Solutions (AWS, Azure), AI & Machine Learning, cyberbezpieczeństwo i DevOps.',
        keywords: 'usługi IT, tworzenie aplikacji webowych, aplikacje mobilne, cloud computing, AI, machine learning, cyberbezpieczeństwo, DevOps, CI/CD',
        ogTitle: 'Usługi IT - Aplikacje Web, Mobile, Cloud, AI | UnitDev',
        ogDescription: 'Kompleksowe usługi programistyczne: aplikacje webowe, mobilne, Cloud Solutions, AI i cyberbezpieczeństwo.',
        canonical: 'https://unitdev.pl/services'
      };
    case '/products':
      return {
        title: 'Produkty - UnitCRM Pro, UnitERP Suite, UnitCloud | UnitDev',
        description: 'Gotowe produkty SaaS: UnitCRM Pro (system CRM od 499 zł/mies), UnitERP Suite (zintegrowany ERP od 899 zł/mies), UnitCloud (platforma No-Code od 299 zł/mies).',
        keywords: 'CRM, ERP, No-Code platform, system CRM, system ERP, SaaS, oprogramowanie biznesowe, zarządzanie firmą',
        ogTitle: 'Produkty - UnitCRM Pro, UnitERP Suite, UnitCloud',
        ogDescription: 'Gotowe rozwiązania SaaS dla Twojego biznesu. CRM, ERP i platforma No-Code.',
        canonical: 'https://unitdev.pl/products'
      };
    case '/about':
      return {
        title: 'O Nas - 15 Lat Doświadczenia, 500+ Projektów | UnitDev',
        description: 'UnitDev to zespół 50+ ekspertów technologii z 15-letnim doświadczeniem. 500+ ukończonych projektów, 250+ zadowolonych klientów. Innowacyjność, jakość i partnerstwo.',
        keywords: 'o firmie, doświadczenie IT, zespół programistów, historia firmy, wartości firmy, case studies, referencje',
        ogTitle: 'O Nas - 15 Lat Doświadczenia | UnitDev',
        ogDescription: 'Zespół pasjonatów technologii. 15 lat doświadczenia, 500+ projektów, najwyższa jakość.',
        canonical: 'https://unitdev.pl/about'
      };
    case '/contact':
      return {
        title: 'Kontakt - Skontaktuj się z Nami | UnitDev',
        description: 'Skontaktuj się z UnitDev. Email: kontakt@unitdev.pl, Tel: +48 123 456 789. Warszawa, Polska. Wsparcie 24/7 dla klientów premium. Bezpłatna wycena projektu.',
        keywords: 'kontakt, wycena projektu, email, telefon, Warszawa, konsultacja IT, wsparcie techniczne',
        ogTitle: 'Kontakt - Skontaktuj się z Nami | UnitDev',
        ogDescription: 'Omówmy Twój projekt. Bezpłatna wycena i konsultacja.',
        canonical: 'https://unitdev.pl/contact'
      };
    default:
      return {
        title: 'UnitDev - Profesjonalne Rozwiązania Programistyczne',
        description: 'Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise',
        keywords: 'aplikacje webowe, aplikacje mobilne, IT, programowanie',
        ogTitle: 'UnitDev',
        ogDescription: 'Profesjonalne rozwiązania programistyczne',
        canonical: 'https://unitdev.pl'
      };
  }
};

// SSR handler - musi być NA KOŃCU po wszystkich statycznych routach
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

  // Get SEO meta tags for current route
  const meta = getMetaTags(req.path);

  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${meta.title}</title>
        <meta name="description" content="${meta.description}">
        <meta name="keywords" content="${meta.keywords}">
        <meta property="og:title" content="${meta.ogTitle}">
        <meta property="og:description" content="${meta.ogDescription}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${meta.canonical}">
        <link rel="canonical" href="${meta.canonical}">
        <link rel="preload" href="/styles.css" as="style">
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
