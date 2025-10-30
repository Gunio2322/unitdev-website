import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/monitoring.css';

const Dashboards = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Dashboardy Przemysłowe - Wizualizacja KPI i Produkcji | Enerjana';
    
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag('description', 'Dashboardy przemysłowe do wizualizacji KPI, produkcji i OEE. Responsywne panele z wykresami real-time. Dostęp mobilny i komputerowy. Integracja z dowolnymi źródłami danych.');
    updateMetaTag('keywords', 'dashboardy przemysłowe, wizualizacja KPI, panel produkcyjny, monitoring OEE, wykresy real-time przemysł, dashboard fabryczny, raportowanie produkcji, wizualizacja danych produkcyjnych');
    updateMetaTag('og:title', 'Dashboardy Przemysłowe - Wizualizacja KPI i Produkcji | Enerjana', true);
    updateMetaTag('og:description', 'Dashboardy przemysłowe do wizualizacji KPI, produkcji i OEE. Responsywne panele z wykresami real-time.', true);
    updateMetaTag('og:url', 'https://enerjana.pl/dashboards', true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://enerjana.pl/dashboards');
    }
  }, [location]);

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
