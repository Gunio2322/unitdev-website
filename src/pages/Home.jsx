import { Helmet } from 'react-helmet-async';
import HeroCard from '../components/HeroCard';
import { LayersIcon, CloudIcon, CpuIcon } from '../components/icons/Icons';
import '../styles/home.css';

const Home = () => {
  const successStories = [
    {
      title: 'E-commerce Platform dla TechMart',
      description: 'Stworzyliśmy platformę e-commerce, która obsługuje 10,000+ transakcji dziennie.',
      industry: 'E-commerce',
      year: '2024'
    },
    {
      title: 'System Bankowy dla FinanceHub',
      description: 'Zintegrowaliśmy kompleksowy system bankowości internetowej.',
      industry: 'Finanse',
      year: '2023'
    },
    {
      title: 'Aplikacja IoT dla SmartHome',
      description: 'Rozwiązanie IoT łączące 50,000+ urządzeń smart home.',
      industry: 'IoT',
      year: '2024'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Aplikacje Webowe do Monitorowania Produkcji - Tańsza Alternatywa dla SCADA | Enerjana</title>
        <meta name="description" content="Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise. Specjalizujemy się w React, Node.js, Cloud Solutions i AI. Ponad 500 zrealizowanych projektów." />
        <meta name="keywords" content="tworzenie aplikacji, aplikacje webowe, aplikacje mobilne, React, Node.js, Cloud, AI, Machine Learning, UnitDev" />
        <meta property="og:title" content="UnitDev - Profesjonalne Rozwiązania Programistyczne" />
        <meta property="og:description" content="Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise. 15 lat doświadczenia, 500+ projektów." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unitdev.pl" />
        <link rel="canonical" href="https://unitdev.pl" />
      </Helmet>
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-image">
          <img 
            src="/images/antonio-janeski-we829ZqzqgA-unsplash.jpg" 
            alt="Hero Background" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </div>
        <div className="hero-content">
          <h1>Aplikacje Webowe do Monitorowania Produkcji - Tańsza Alternatywa dla SCADA</h1>
          <p>Łączę 18 lat doświadczenia w automatyce przemysłowej z 10-letnim stażem w programowaniu aplikacji webowych. Enerjana to przystępne cenowo rozwiązania dla małych i średnich firm - alternatywa dla drogich systemów SCADA.</p>
          <div className="hero-cards">
            <HeroCard 
              icon={CpuIcon}
              title="Integracja PLC z Web"
              description="Łączę sterowniki przemysłowe (Mitsubishi, Siemens) z aplikacjami webowymi"
              linkTo="/services"
              linkText="Zobacz usługi"
            />
            <HeroCard 
              icon={LayersIcon}
              title="Monitoring Real-Time"
              description="Dashboardy produkcyjne z wizualizacją procesów w czasie rzeczywistym"
              linkTo="/services"
              linkText="Dowiedz się więcej"
            />
            <HeroCard 
              icon={CloudIcon}
              title="Tańsza od SCADA"
              description="Rozwiązania dostosowane do budżetu małych i średnich firm produkcyjnych"
              linkTo="/contact"
              linkText="Zapytaj o wycenę"
            />
          </div>
        </div>
      </section>

      {/* About Business Section */}
      <section className="about-business">
        <div className="container">
          <h2>Enerjana - Automatyka Przemysłowa Spotyka Web Development</h2>
          {/* <div className="business-intro">
            <p className="lead-text">
              Łączę <strong>18 lat doświadczenia w automatyce przemysłowej</strong> z <strong>10-letnim stażem w programowaniu aplikacji webowych</strong>. 
              Enerjana to przystępne cenowo rozwiązania dla małych i średnich firm - alternatywa dla drogich systemów SCADA.
            </p>
          </div> */}



          <div className="why-work-section">
            <h3>Dlaczego warto ze mną współpracować?</h3>
            <div className="why-work-content">
              <p>
                Jako <strong>automatyk z 18-letnim doświadczeniem</strong> doskonale rozumiem specyfikę procesów przemysłowych, 
                protokoły komunikacyjne i wymagania systemów sterowania. Połączenie tej wiedzy z zaawansowanymi umiejętnościami 
                w <strong>JavaScript (Node.js, Express, React, MongoDB)</strong> pozwala mi tworzyć rozwiązania, które naprawdę działają 
                w warunkach produkcyjnych.
              </p>
              <p>
                Oferuję <strong>realną alternatywę dla systemów SCADA</strong> - aplikacje stworzone pod Twoje potrzeby, które kosztują 
                ułamek ceny gotowych systemów przemysłowych. Idealne dla małych i średnich firm, które nie mają budżetu na drogie licencje, 
                ale potrzebują profesjonalnego narzędzia do monitoringu produkcji.
              </p>
              <p className="highlight-text">
                Nie jestem tylko programistą - jestem automatykiem, który pisze kod. Znam język Twojej maszyny i wiem, 
                jak go przetłumaczyć na przejrzysty, funkcjonalny interfejs webowy.
              </p>
            </div>
          </div>

          <div className="business-footer">
            <p className="location-info">
              <strong>Obszar działania:</strong> Województwo łódzkie, mazowieckie i okoliczne regiony Polski centralnej.
            </p>
            <p className="cta-text">
              Skontaktuj się ze mną - porozmawiajmy o tym, jak mogę zautomatyzować i zdigitalizować procesy w Twojej firmie.
            </p>
            <a href="/contact" className="btn-primary">Umów konsultację</a>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <h2>Historie Sukcesu</h2>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-meta">
                  <span className="industry">{story.industry}</span>
                  <span className="year">{story.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
