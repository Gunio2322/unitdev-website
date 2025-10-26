import { Helmet } from 'react-helmet-async';
import '../styles/monitoring.css';

const Integration = () => {
  const integrationServices = [
    {
      title: 'Integracja PLC z systemami biznesowymi',
      items: [
        'Transfer danych produkcyjnych do systemu ERP',
        'Zasilanie systemów MES danymi z linii produkcyjnej w czasie rzeczywistym',
        'Export danych do narzędzi BI (Business Intelligence)',
        'Synchronizacja zleceń produkcyjnych między systemem IT a sterownikami'
      ]
    },
    {
      title: 'Komunikacja przemysłowa',
      items: [
        'Protokoły Mitsubishi (MC Protocol, SLMP, MELSEC)',
        'Protokoły Siemens (S7 Communication, ISO-on-TCP)',
        'OPC UA (Universal Architecture)',
        'Modbus TCP',
        'REST API dla systemów IT'
      ]
    }
  ];

  const middlewareFeatures = [
    'Zbiera dane ze sterowników',
    'Normalizuje i przetwarza informacje',
    'Przekazuje dane do systemów IT przez API',
    'Archiwizuje dane w bazie MongoDB',
    'Obsługuje kolejki i bufory dla niezawodności'
  ];

  const useCases = [
    {
      number: '1',
      title: 'Automatyczny raport produkcyjny do ERP',
      description: 'Sterownik PLC rejestruje liczbę wyprodukowanych sztuk → Middleware pobiera dane co godzinę → Dane trafiają do systemu ERP → Automatyczne zamknięcie zlecenia produkcyjnego'
    },
    {
      number: '2',
      title: 'Monitoring maszyn dla działu utrzymania ruchu',
      description: 'Dane o pracy maszyn z PLC → Aplikacja webowa → Dział maintenance widzi rzeczywisty czas pracy, postoje, potrzeby serwisowe'
    },
    {
      number: '3',
      title: 'Zarządzanie energią',
      description: 'Pomiary z liczników i PLC → System zbierania danych → Dashboard energetyczny + eksport do systemu zarządzania energią'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Integracja PLC z Systemami IT - Połącz Świat OT z IT | Enerjana</title>
        <meta name="description" content="Integracja sterowników PLC (Mitsubishi, Siemens) z systemami ERP, MES, BI. Protokoły MC, S7, OPC UA, Modbus TCP. Middleware Node.js. Województwo łódzkie, mazowieckie." />
        <meta name="keywords" content="integracja PLC, OT IT, sterowniki Mitsubishi Siemens, MC Protocol, S7 Communication, OPC UA, middleware przemysłowy, ERP MES integracja" />
        <meta property="og:title" content="Integracja PLC z Systemami IT - OT/IT Bridge | Enerjana" />
        <meta property="og:description" content="Łączę świat automatyki (OT) z systemami IT. Integracja PLC z ERP, MES, BI. Protokoły przemysłowe + REST API." />
        <link rel="canonical" href="https://enerjana.pl/integration" />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Integracja PLC z Systemami IT - Połącz Świat OT z IT</h1>
          <p>Budowanie mostów między automatyką przemysłową a systemami biznesowymi</p>
        </div>
      </section>

      <section className="industrial-content">
        <div className="container">
          <div className="intro-section">
            <p className="lead-paragraph">
              Świat automatyki przemysłowej (OT - Operational Technology) i świat systemów informatycznych (IT) zbyt często 
              funkcjonują oddzielnie. Dane ze sterowników PLC nie trafiają do systemów ERP, MES czy BI, co uniemożliwia 
              kompleksową analizę i optymalizację produkcji.
            </p>
            <p className="lead-paragraph highlight-text">
              Specjalizuję się w budowaniu mostów między tymi światami.
            </p>
          </div>

          <div className="features-intro">
            <h2>Co oferuję?</h2>
          </div>

          <div className="use-cases-section">
            <div className="use-cases-grid">
              {integrationServices.map((service, index) => (
                <div key={index} className="use-case-card">
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="middleware-section">
            <h2>Middleware i bramy komunikacyjne</h2>
            <p className="section-description">
              Tworzę dedykowane aplikacje (Node.js/Express) pełniące rolę pośrednika między PLC a systemami IT. Middleware:
            </p>
            <ul className="benefits-list">
              {middlewareFeatures.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="examples-section">
            <h2>Przykładowe zastosowania</h2>
            <div className="examples-grid">
              {useCases.map((useCase, index) => (
                <div key={index} className="example-card">
                  <div className="example-number">{useCase.number}</div>
                  <h3>{useCase.title}</h3>
                  <p className="flow-description">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-section">
            <h2>Dlaczego ja?</h2>
            <p className="expertise-text">
              Jako <strong>automatyk z 18-letnim doświadczeniem</strong> doskonale rozumiem specyfikę pracy sterowników PLC, 
              protokoły komunikacyjne i wymagania systemów przemysłowych. <strong>10 lat programowania w Node.js/React</strong> daje 
              mi umiejętności tworzenia nowoczesnych, skalowalnych rozwiązań integracyjnych.
            </p>
            <p className="highlight-text">
              Nie musisz tłumaczyć programiście, czym jest PLC, ani automatykowi, czym jest REST API. Znam oba światy.
            </p>
          </div>

          <div className="location-cta">
            <p className="location-info">
              <strong>Obsługuję firmy produkcyjne z województwa łódzkiego, mazowieckiego i centralnej Polski.</strong>
            </p>
            <a href="/contact" className="btn-primary">Porozmawiajmy o integracji Twoich systemów</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
