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
        title: 'Monitoring Produkcji - Tańsza Alternatywa dla SCADA | Enerjana',
        description: 'Aplikacje webowe do monitorowania procesów przemysłowych. Ułamek ceny systemów SCADA. 18 lat w automatyce. Mitsubishi, Siemens PLC. Łódzkie, Mazowieckie.',
        keywords: 'aplikacje webowe PLC, system HMI SCADA webowy, dashboard przemysłowy, monitoring produkcji online, automatyka przemysłowa Łódź, programowanie PLC Warszawa, Node.js automatyka przemysłowa, React dashboard produkcyjny',
        ogTitle: 'Monitoring Produkcji - Tańsza Alternatywa dla SCADA | Enerjana',
        ogDescription: 'Aplikacje webowe do monitorowania procesów przemysłowych. Ułamek ceny systemów SCADA. 18 lat w automatyce.',
        canonical: 'https://enerjana.pl'
      };
    case '/services':
      return {
        title: 'Aplikacje Webowe do Wizualizacji Danych z PLC | Node.js React',
        description: 'Dedykowane aplikacje webowe zbierające dane z PLC (Mitsubishi, Siemens) w czasie rzeczywistym. Node.js, React, MongoDB. Łódź, Warszawa, Polska centralna.',
        keywords: 'aplikacja webowa do zbierania danych z PLC, wizualizacja danych PLC, monitoring maszyn przez internet, wizualizacja danych Mitsubishi PLC, system HMI dla Siemens S7, automatyka przemysłowa Łódź, MongoDB dane przemysłowe',
        ogTitle: 'Aplikacje Webowe do Wizualizacji Danych z PLC | Node.js React',
        ogDescription: 'Dedykowane aplikacje webowe zbierające dane z PLC w czasie rzeczywistym. Node.js, React, MongoDB.',
        canonical: 'https://enerjana.pl/services'
      };
    case '/monitoring':
      return {
        title: 'Monitoring Procesów Przemysłowych - Tańsza Alternatywa dla SCADA',
        description: 'Aplikacje webowe zamiast drogich systemów SCADA. Monitoring i sterowanie produkcją za ułamek ceny. Dla małych i średnich firm. Łódź, Warszawa.',
        keywords: 'webowy system SCADA dla małych firm, monitoring maszyn przez internet, aplikacja webowa do zbierania danych z PLC, system HMI SCADA webowy, monitoring produkcji online, systemy HMI województwo łódzkie',
        ogTitle: 'Monitoring Procesów Przemysłowych - Tańsza Alternatywa dla SCADA',
        ogDescription: 'Aplikacje webowe zamiast drogich systemów SCADA. Monitoring produkcji za ułamek ceny.',
        canonical: 'https://enerjana.pl/monitoring'
      };
    case '/dashboards':
      return {
        title: 'Dashboardy Przemysłowe - Wizualizacja Danych Produkcyjnych Real-Time',
        description: 'Dashboardy przemysłowe agregujące dane z PLC i systemów IT. Monitoring produkcji, KPI, OEE. React, Node.js. Woj. łódzkie, mazowieckie.',
        keywords: 'dashboard przemysłowy, dashboard produkcyjny w przeglądarce, wizualizacja danych PLC, React dashboard produkcyjny, monitoring produkcji online, KPI produkcyjne, OEE, Real-time monitoring',
        ogTitle: 'Dashboardy Przemysłowe - Wizualizacja Danych Produkcyjnych Real-Time',
        ogDescription: 'Dashboardy przemysłowe agregujące dane z PLC i systemów IT. Monitoring real-time, KPI, raporty zmianowe.',
        canonical: 'https://enerjana.pl/dashboards'
      };
    case '/integration':
      return {
        title: 'Integracja PLC z Systemami IT - ERP, MES, BI | Enerjana',
        description: 'Integracja sterowników PLC z systemami biznesowymi. Transfer danych OT-IT. Middleware Node.js. Protokoły Mitsubishi, Siemens, OPC UA, Modbus TCP.',
        keywords: 'integracja PLC IT, integracja sterownika z systemem ERP, OPC UA integracja, Modbus TCP komunikacja, MC Protocol Mitsubishi, S7 Communication, middleware przemysłowy, transfer danych OT-IT',
        ogTitle: 'Integracja PLC z Systemami IT - ERP, MES, BI | Enerjana',
        ogDescription: 'Łączę świat automatyki (OT) z systemami IT. Integracja PLC z ERP, MES, BI. Protokoły przemysłowe + REST API.',
        canonical: 'https://enerjana.pl/integration'
      };
    case '/about':
      return {
        title: 'O Mnie - Automatyk i Web Developer | Enerjana',
        description: 'Łączę 18 lat doświadczenia w automatyce przemysłowej z 10 latami programowania webowego. Programowanie sterowników PLC, aplikacje SCADA, dashboardy, integracja PLC z systemami IT.',
        keywords: 'automatyk programista, programowanie PLC, sterowniki przemysłowe, Node.js developer, React developer, integracja PLC ERP, automatyka i IT',
        ogTitle: 'O Mnie - Automatyk i Web Developer | Enerjana',
        ogDescription: '18 lat w automatyce + 10 lat w programowaniu webowym. Unikalne połączenie kompetencji dla przemysłu.',
        canonical: 'https://enerjana.pl/about'
      };
    case '/contact':
      return {
        title: 'Kontakt - Skontaktuj się z Nami | Enerjana',
        description: 'Skontaktuj się z Enerjana. Email: enerjana2@gmail.com, Tel: +48 792 425 411. Cielądz, Polska. Bezpłatna wycena projektu.',
        keywords: 'kontakt, wycena projektu, email, telefon, konsultacja IT, wsparcie techniczne, automatyka przemysłowa',
        ogTitle: 'Kontakt - Skontaktuj się z Nami | Enerjana',
        ogDescription: 'Omówmy Twój projekt. Bezpłatna wycena i konsultacja.',
        canonical: 'https://enerjana.pl/contact'
      };
    default:
      return {
        title: 'Enerjana - Monitoring Produkcji | Aplikacje Webowe PLC',
        description: 'Aplikacje webowe do monitorowania procesów przemysłowych. Tańsza alternatywa dla SCADA.',
        keywords: 'aplikacje webowe PLC, monitoring produkcji, automatyka przemysłowa',
        ogTitle: 'Enerjana - Monitoring Produkcji',
        ogDescription: 'Aplikacje webowe dla przemysłu',
        canonical: 'https://enerjana.pl'
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
