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
        title: 'Kontakt - Skontaktuj się z Nami | UnitDev',
        description: 'Skontaktuj się z UnitDev. Email: kontakt@unitdev.pl, Tel: +48 123 456 789. Warszawa, Polska. Wsparcie 24/7 dla klientów premium. Bezpłatna wycena projektu.',
        keywords: 'kontakt, wycena projektu, email, telefon, Warszawa, konsultacja IT, wsparcie techniczne',
        ogTitle: 'Kontakt - Skontaktuj się z Nami | UnitDev',
        ogDescription: 'Omówmy Twój projekt. Bezpłatna wycena i konsultacja.',
        canonical: 'https://unitdev.pl/contact'
      };
    case '/monitoring':
      return {
        title: 'Aplikacje Webowe do Monitorowania i Sterowania - Tańsza Alternatywa dla SCADA | Enerjana',
        description: 'Dedykowane aplikacje webowe do monitorowania procesów przemysłowych. Tańsza alternatywa dla systemów SCADA - kosztuje ułamek ceny, działa w przeglądarce, bez opłat licencyjnych.',
        keywords: 'monitoring procesów przemysłowych, aplikacje webowe przemysł, alternatywa SCADA, integracja PLC, Mitsubishi Siemens, monitoring produkcji',
        ogTitle: 'Aplikacje Webowe do Monitorowania - Alternatywa dla SCADA',
        ogDescription: 'Dedykowane aplikacje webowe do monitoringu przemysłu. Tańsze niż SCADA, dostępne przez przeglądarkę.',
        canonical: 'https://unitdev.pl/monitoring'
      };
    case '/dashboards':
      return {
        title: 'Dashboardy Przemysłowe - Wizualizacja Danych Produkcyjnych | Enerjana',
        description: 'Dedykowane dashboardy przemysłowe z Real-Time monitoring. Wizualizacja KPI produkcyjnych, OEE, zarządzanie energią. React, Node.js, WebSockets. Województwo łódzkie, mazowieckie.',
        keywords: 'dashboard przemysłowy, wizualizacja produkcji, monitoring real-time, KPI produkcyjne, OEE, zarządzanie energią',
        ogTitle: 'Dashboardy Przemysłowe - Wizualizacja Danych | Enerjana',
        ogDescription: 'Dashboardy przemysłowe agregujące dane z PLC i systemów IT. Monitoring real-time, KPI, raporty zmianowe.',
        canonical: 'https://unitdev.pl/dashboards'
      };
    case '/integration':
      return {
        title: 'Integracja PLC z Systemami IT - Połącz Świat OT z IT | Enerjana',
        description: 'Integracja sterowników PLC (Mitsubishi, Siemens) z systemami ERP, MES, BI. Protokoły MC, S7, OPC UA, Modbus TCP. Middleware Node.js. Województwo łódzkie, mazowieckie.',
        keywords: 'integracja PLC, OT IT, sterowniki Mitsubishi Siemens, MC Protocol, S7 Communication, OPC UA, middleware przemysłowy, ERP MES integracja',
        ogTitle: 'Integracja PLC z Systemami IT - OT/IT Bridge | Enerjana',
        ogDescription: 'Łączę świat automatyki (OT) z systemami IT. Integracja PLC z ERP, MES, BI. Protokoły przemysłowe + REST API.',
        canonical: 'https://unitdev.pl/integration'
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
