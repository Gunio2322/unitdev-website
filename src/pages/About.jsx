import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
  const location = useLocation();
  const [stats, setStats] = useState([
    { target: 18, current: 0, label: 'Lat w Automatyce' },
    { target: 10, current: 0, label: 'Lat w Programowaniu' }
  ]);
  
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    document.title = 'O Mnie - 18 Lat w Automatyce Przemysłowej | Enerjana';
    
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

    updateMetaTag('description', 'Mariusz Głuszcz - 18 lat doświadczenia w automatyce przemysłowej + 10 lat w programowaniu. Tworzę aplikacje webowe dla przemysłu łącząc automatykę z IT. Łódzkie, Mazowieckie.');
    updateMetaTag('keywords', 'automatyk programista, doświadczenie automatyka, programowanie przemysłowe, Node.js automatyka, Mariusz Głuszcz, automatyk Łódź, integracja OT IT, aplikacje przemysłowe');
    updateMetaTag('og:title', 'O Mnie - 18 Lat w Automatyce Przemysłowej | Enerjana', true);
    updateMetaTag('og:description', 'Mariusz Głuszcz - 18 lat w automatyce przemysłowej + 10 lat w programowaniu. Aplikacje webowe dla przemysłu.', true);
    updateMetaTag('og:url', 'https://enerjana.pl/about', true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://enerjana.pl/about');
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateStats();
        setHasAnimated(true);
      }
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }

        setStats(prev => {
          const newStats = [...prev];
          newStats[index] = { ...newStats[index], current: Math.floor(current) };
          return newStats;
        });
      }, interval);
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>O Mnie</h1>
          <p>Poznaj moje doświadczenie i kompetencje</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <h2>Kim Jestem</h2>
          <p>Jestem <strong>Enerjana</strong> - jednoosobową działalnością gospodarczą łączącą dwa światy: automatykę przemysłową i nowoczesne technologie webowe. To unikalne połączenie kompetencji pozwala mi realizować projekty, które wymagają zarówno głębokiej znajomości systemów przemysłowych (PLC, SCADA), jak i umiejętności tworzenia zaawansowanych aplikacji internetowych.</p>
          <p>Moje 18 lat doświadczenia w automatyce przemysłowej oraz 10 lat w programowaniu webowym (Node.js, React) sprawiają, że rozumiem potrzeby produkcji i potrafię dostarczyć nowoczesne rozwiązania IT dopasowane do realiów zakładów produkcyjnych.</p>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <h2>Doświadczenie</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.current}+</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2>Moje Kompetencje</h2>
          <div className="experience-columns">
            <div className="experience-column">
              <h3>🏭 Automatyka Przemysłowa</h3>
              <ul>
                <li>Programowanie sterowników PLC (Mitsubishi, Siemens)</li>
                <li>Protokoły komunikacyjne (MC Protocol, SLMP, S7, Modbus TCP, OPC UA)</li>
                <li>Systemy SCADA i wizualizacje przemysłowe</li>
                <li>Diagnostyka i optymalizacja systemów automatyki</li>
                <li>Integracja maszyn i linii produkcyjnych</li>
              </ul>
            </div>
            <div className="experience-column">
              <h3>💻 Programowanie Webowe</h3>
              <ul>
                <li>Backend: Node.js, Express.js, REST API</li>
                <li>Frontend: React, responsive design</li>
                <li>Bazy danych: MongoDB, MySQL</li>
                <li>Real-time: WebSockets dla monitorowania na żywo</li>
                <li>Middleware: integracja PLC z systemami IT (ERP, MES, BI)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Co To Dla Ciebie Oznacza</h2>
          <div className="benefits-columns">
            <div className="benefits-column">
              <h3>Rozumiem:</h3>
              <ul>
                <li>Jak działają sterowniki PLC i protokoły komunikacyjne</li>
                <li>Potrzeby i realia zakładów produkcyjnych</li>
                <li>Język automatyków i inżynierów produkcji</li>
                <li>Ograniczenia i możliwości systemów przemysłowych</li>
                <li>Znaczenie niezawodności i czasu pracy systemu</li>
              </ul>
            </div>
            <div className="benefits-column">
              <h3>Potrafię:</h3>
              <ul>
                <li>Stworzyć aplikacje webowe czytające dane bezpośrednio z PLC</li>
                <li>Zaprojektować dashboardy z danymi produkcyjnymi i biznesowymi</li>
                <li>Zbudować middleware łączące PLC z systemami ERP/MES</li>
                <li>Dostarczyć tańszą alternatywę dla systemów SCADA</li>
                <li>Wdrożyć rozwiązania dopasowane do Twojego budżetu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="collaboration-section">
        <div className="container">
          <h2>Z Kim Współpracuję</h2>
          <div className="collaboration-grid">
            <div className="collaboration-card">
              <h3>🏭 Firmy Produkcyjne</h3>
              <p>Bezpośrednia współpraca z małymi i średnimi zakładami produkcyjnymi, które potrzebują aplikacji do monitorowania maszyn, dashboardów produkcyjnych lub integracji PLC z systemami biznesowymi.</p>
            </div>
            <div className="collaboration-card">
              <h3>🤝 Firmy Automatyki</h3>
              <p>Wsparcie dla innych firm automatyki, które potrzebują kompetencji webowych - tworzę dla nich aplikacje SCADA, dashboardy czy systemy integracyjne jako podwykonawca.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h2>Obszar Działania</h2>
          <p>Działam głównie na terenie <strong>województwa łódzkiego i mazowieckiego</strong> (centralna Polska). W przypadku projektów zdalnych (aplikacje webowe, integracje) obszar działania jest nieograniczony.</p>
          <p>Oferuję również zdalne wsparcie techniczne i konsultacje online dla klientów z całej Polski.</p>
        </div>
      </section>
    </>
  );
};

export default About;
