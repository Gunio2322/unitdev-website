import { Helmet } from 'react-helmet-async';
import '../styles/monitoring.css';

const Dashboards = () => {
  const features = [
    {
      title: 'Real-time monitoring',
      description: 'Dane odświeżane w czasie rzeczywistym bez potrzeby przeładowania strony (WebSockets)'
    },
    {
      title: 'Intuicyjność',
      description: 'Przejrzysty interfejs zaprojektowany z myślą o operatorach i kierownikach produkcji'
    },
    {
      title: 'Customizacja',
      description: 'Każdy dashboard projektuję indywidualnie pod potrzeby klienta'
    },
    {
      title: 'Mobilność',
      description: 'Responsywny design działający na monitorach przemysłowych, tabletach i smartfonach'
    },
    {
      title: 'Integracja',
      description: 'Połączenie danych z PLC (Mitsubishi, Siemens) z danymi z systemów IT (ERP, MES)'
    }
  ];

  const useCases = [
    {
      title: 'Monitoring linii produkcyjnej',
      items: [
        'Wydajność linii (sztuki/godzinę)',
        'Czasy przestojów i ich przyczyny',
        'OEE (Overall Equipment Effectiveness)',
        'Status poszczególnych stacji roboczych'
      ]
    },
    {
      title: 'Zarządzanie energią',
      items: [
        'Aktualne pobory mocy',
        'Zużycie energii w czasie',
        'Koszty energii',
        'Identyfikacja odbiorników wysokoprądowych'
      ]
    },
    {
      title: 'Kontrola jakości',
      items: [
        'Liczba wyprodukowanych sztuk OK/NOK',
        'Trendy parametrów jakościowych',
        'Alarmy przy przekroczeniu tolerancji'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboardy Przemysłowe - Wizualizacja Danych Produkcyjnych | Enerjana</title>
        <meta name="description" content="Dedykowane dashboardy przemysłowe z Real-Time monitoring. Wizualizacja KPI produkcyjnych, OEE, zarządzanie energią. React, Node.js, WebSockets. Województwo łódzkie, mazowieckie." />
        <meta name="keywords" content="dashboard przemysłowy, wizualizacja produkcji, monitoring real-time, KPI produkcyjne, OEE, zarządzanie energią" />
        <meta property="og:title" content="Dashboardy Przemysłowe - Wizualizacja Danych | Enerjana" />
        <meta property="og:description" content="Dashboardy przemysłowe agregujące dane z PLC i systemów IT. Monitoring real-time, KPI, raporty zmianowe." />
        <link rel="canonical" href="https://enerjana.pl/dashboards" />
      </Helmet>

      <section className="page-header">
        <div className="container">
          <h1>Dashboardy Przemysłowe - Wizualizacja Danych Produkcyjnych</h1>
          <p>Centrum kontroli Twojej produkcji - wszystkie kluczowe wskaźniki w jednym miejscu</p>
        </div>
      </section>

      <section className="industrial-content">
        <div className="container">
          <div className="intro-section">
            <p className="lead-paragraph">
              Dashboard przemysłowy to centrum kontroli Twojej produkcji. Jeden ekran, na którym widzisz wszystkie kluczowe 
              wskaźniki - od wydajności linii produkcyjnej, przez zużycie energii, po statusy maszyn i alarmy.
            </p>
          </div>

          <div className="features-intro">
            <h2>Tworzę dedykowane dashboardy, które:</h2>
            <ul className="benefits-list">
              <li>✓ Agregują dane z wielu źródeł (PLC, czujniki, systemy IT)</li>
              <li>✓ Wyświetlają KPI produkcyjne w czasie rzeczywistym</li>
              <li>✓ Wizualizują trendy i historię procesów</li>
              <li>✓ Alarmują o odchyleniach i nieprawidłowościach</li>
              <li>✓ Generują raporty zmianowe i dobowe</li>
            </ul>
          </div>

          <div className="features-section">
            <h2>Co wyróżnia moje dashboardy?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="use-cases-section">
            <h2>Przykładowe zastosowania</h2>
            <div className="use-cases-grid">
              {useCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <h3>{useCase.title}</h3>
                  <ul>
                    {useCase.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-stack-section">
            <h2>Stack technologiczny</h2>
            <p className="tech-description">
              <strong>React</strong> do budowy interfejsu, <strong>Node.js/Express</strong> do obsługi danych, 
              <strong> MongoDB</strong> do archiwizacji, <strong>Chart.js/Recharts</strong> do wizualizacji wykresów.
            </p>
          </div>

          <div className="expertise-section">
            <p className="expertise-text">
              Moje <strong>18 lat w automatyce przemysłowej</strong> gwarantuje, że dashboard będzie wyświetlać dane, 
              które naprawdę są potrzebne w produkcji - nie tylko ładne wykresy, ale wartościowe informacje wspierające decyzje.
            </p>
          </div>

          <div className="location-cta">
            <p className="location-info">
              <strong>Działam w województwie łódzkim, warszawskim i regionach Polski centralnej.</strong>
            </p>
            <a href="/contact" className="btn-primary">Skontaktuj się - omówmy Twoje potrzeby</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboards;
