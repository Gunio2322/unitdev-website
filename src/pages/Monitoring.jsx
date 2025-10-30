import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/monitoring.css';

const Monitoring = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Systemy Monitoringu Przemysłowego - Dashboardy Real-Time | Enerjana';
    
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

    updateMetaTag('description', 'Systemy monitoringu procesów przemysłowych. Dashboardy z wizualizacją real-time, alarmy, raporty. Niższa cena niż SCADA. Sprawdzone rozwiązania dla małych i średnich firm produkcyjnych.');
    updateMetaTag('keywords', 'monitoring produkcji, system monitoringu przemysłowego, dashboardy real-time, wizualizacja procesów produkcyjnych, alternatywa dla SCADA, monitoring maszyn, system alarmowy przemysł, raporty produkcyjne');
    updateMetaTag('og:title', 'Systemy Monitoringu Przemysłowego - Dashboardy Real-Time | Enerjana', true);
    updateMetaTag('og:description', 'Systemy monitoringu procesów przemysłowych. Dashboardy z wizualizacją real-time, alarmy, raporty.', true);
    updateMetaTag('og:url', 'https://enerjana.pl/monitoring', true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://enerjana.pl/monitoring');
    }
  }, [location]);

  const features = [
    'Wizualizacja procesów w czasie rzeczywistym',
    'Sterowanie maszynami i procesami (z wielopoziomowym zabezpieczeniem)',
    'System alarmów i powiadomień (e-mail, SMS)',
    'Rejestracja zdarzeń i trendów historycznych',
    'Panel administracyjny z zarządzaniem użytkownikami',
    'Responsywny interfejs - działa na komputerach, tabletach i smartfonach'
  ];

  const plcIntegration = [
    'Mitsubishi (MC Protocol, SLMP)',
    'Siemens (S7 Communication, OPC UA)',
    'Inne sterowniki przez Modbus TCP, OPC UA'
  ];

  const technologies = [
    'React dla interfejsu użytkownika',
    'Node.js/Express dla logiki backendowej',
    'WebSockets dla komunikacji w czasie rzeczywistym',
    'MongoDB do przechowywania danych'
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Aplikacje Webowe do Monitorowania i Sterowania - Tańsza Alternatywa dla SCADA</h1>
          <p>Dedykowane rozwiązania dla małych i średnich firm produkcyjnych</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="monitoring-intro">
        <div className="container">
          <div className="intro-content">
            <p className="lead-paragraph">
              Tradycyjne systemy SCADA to często koszt <strong>dziesiątek, a nawet setek tysięcy złotych</strong>. 
              Dla małych i średnich firm produkcyjnych to bariera nie do przejścia. Drogie licencje, dedykowane stacje operatorskie, 
              skomplikowana konfiguracja i koszty wsparcia technicznego sprawiają, że wiele firm rezygnuje z profesjonalnego 
              monitoringu produkcji.
            </p>
            <div className="solution-highlight">
              <h2>Oferuję dostępną cenowo alternatywę - dedykowane aplikacje webowe.</h2>
              <p>
                To nie jest klasyczny system SCADA, ale <strong>funkcjonalna aplikacja stworzona pod Twoje konkretne potrzeby</strong>, 
                która kosztuje ułamek ceny gotowych systemów przemysłowych.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="what-offer-section">
        <div className="container">
          <h2>Co oferuję?</h2>
          <p className="section-intro">
            Projektuję i wdrażam aplikacje webowe do monitorowania i sterowania procesami przemysłowymi, 
            które działają w każdej przeglądarce - <strong>bez instalacji dodatkowego oprogramowania</strong>.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Funkcjonalności dostosowane do Twoich potrzeb</h3>
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="feature-card">
              <h3>Integracja ze sterownikami</h3>
              <ul className="feature-list">
                {plcIntegration.map((plc, index) => (
                  <li key={index}>{plc}</li>
                ))}
              </ul>
            </div>

            <div className="feature-card">
              <h3>Technologie</h3>
              <ul className="feature-list">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <h2>Dlaczego aplikacja webowa zamiast systemu SCADA?</h2>
          <p className="comparison-intro">
            Dla małych i średnich firm to oszczędność <strong>dziesiątek tysięcy złotych</strong>:
          </p>

          <div className="comparison-grid">
            <div className="comparison-card scada-card">
              <h3>❌ Tradycyjny SCADA</h3>
              <ul className="comparison-list">
                <li>Licencja: 20 000 - 100 000+ zł</li>
                <li>Licencje na dodatkowe stanowiska: 5 000 - 20 000 zł każda</li>
                <li>Roczne wsparcie: 15-20% wartości licencji</li>
                <li>Dedykowane stacje operatorskie</li>
                <li>Długi czas wdrożenia (miesiące)</li>
              </ul>
            </div>

            <div className="comparison-card webapp-card">
              <h3>✅ Aplikacja webowa Enerjana</h3>
              <ul className="comparison-list">
                <li>Jednorazowy koszt wdrożenia wielokrotnie niższy</li>
                <li>Brak opłat licencyjnych</li>
                <li>Działa na Twoim istniejącym sprzęcie</li>
                <li>Dostęp dla nieograniczonej liczby użytkowników</li>
                <li>Szybkie wdrożenie (tygodnie, nie miesiące)</li>
              </ul>
            </div>
          </div>

          <div className="benefits-section">
            <h3>Inne korzyści:</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Dostępność</strong>
                <p>Wchodzisz przez przeglądarkę z dowolnego miejsca</p>
              </div>
              <div className="benefit-item">
                <strong>Prostota</strong>
                <p>Nie potrzebujesz szkoleń z obsługi skomplikowanych systemów</p>
              </div>
              <div className="benefit-item">
                <strong>Skalowalność</strong>
                <p>Zaczynasz od małego zakresu, rozbudowujesz w miarę potrzeb</p>
              </div>
              <div className="benefit-item">
                <strong>Customizacja</strong>
                <p>Dostajesz dokładnie to, czego potrzebujesz, nie płacisz za funkcje, których nie użyjesz</p>
              </div>
              <div className="benefit-item">
                <strong>Integracja</strong>
                <p>Łatwe połączenie z Twoimi systemami IT (ERP, MES)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="target-audience-section">
        <div className="container">
          <h2>Dla kogo to rozwiązanie?</h2>
          <p className="audience-intro">
            Idealne dla <strong>małych i średnich firm produkcyjnych</strong>, które:
          </p>
          <ul className="audience-list">
            <li>Mają 1-10 maszyn/linii do monitorowania</li>
            <li>Nie mają budżetu na drogie systemy SCADA</li>
            <li>Potrzebują konkretnych funkcji, nie uniwersalnego pakietu</li>
            <li>Chcą zacząć od małego i rozbudowywać system stopniowo</li>
            <li>Potrzebują dostępu zdalnego dla kierownictwa i specjalistów</li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="expertise-content">
            <p className="expertise-text">
              Jako <strong>automatyk z 18-letnim doświadczeniem</strong> wiem, jakie wymagania stawiają systemy przemysłowe. 
              Łączę tę wiedzę z <strong>10-letnim doświadczeniem w tworzeniu aplikacji webowych</strong>, tworząc rozwiązania 
              niezawodne, funkcjonalne i przede wszystkim - <strong>dostępne cenowo</strong>.
            </p>
            <p className="expertise-highlight">
              Nie musisz wydawać fortuny na system, który wykorzystasz w 20%. 
              <strong> Zapłać tylko za to, czego naprawdę potrzebujesz.</strong>
            </p>
            <p className="location-text">
              Obsługuję firmy z województwa <strong>łódzkiego, mazowieckiego i Polski centralnej</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Gotowy na wdrożenie systemu monitoringu?</h2>
          <p>Skontaktuj się ze mną - porozmawiajmy o Twoich potrzebach i wycenie projektu</p>
          <a href="/contact" className="btn-primary">Umów bezpłatną konsultację</a>
        </div>
      </section>
    </>
  );
};

export default Monitoring;
