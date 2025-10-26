import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/about.css';

const About = () => {
  const [stats, setStats] = useState([
    { target: 500, current: 0, label: 'Projektów Ukończonych' },
    { target: 250, current: 0, label: 'Zadowolonych Klientów' },
    { target: 50, current: 0, label: 'Członków Zespołu' },
    { target: 15, current: 0, label: 'Lat Doświadczenia' }
  ]);
  
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  const successStories = [
    {
      title: 'E-commerce Platform dla TechMart',
      description: 'Stworzyliśmy platformę e-commerce, która obsługuje 10,000+ transakcji dziennie. Zwiększyliśmy konwersję o 45% i obniżyliśmy koszty operacyjne o 30%.',
      industry: 'E-commerce',
      year: '2024'
    },
    {
      title: 'System Bankowy dla FinanceHub',
      description: 'Zintegrowaliśmy kompleksowy system bankowości internetowej z najwyższymi standardami bezpieczeństwa. Projekt otrzymał certyfikat ISO 27001.',
      industry: 'Finanse',
      year: '2023'
    },
    {
      title: 'Aplikacja IoT dla SmartHome',
      description: 'Rozwiązanie IoT łączące 50,000+ urządzeń smart home w czasie rzeczywistym.',
      industry: 'IoT',
      year: '2024'
    },
    {
      title: 'System Logistyczny dla TransLog',
      description: 'Platforma zarządzająca flotą 200+ pojazdów z optymalizacją tras w czasie rzeczywistym.',
      industry: 'Logistyka',
      year: '2023'
    }
  ];

  const values = [
    { title: 'Innowacyjność', description: 'Śledzimy najnowsze trendy i wdrażamy je w naszych projektach' },
    { title: 'Jakość', description: 'Każdy projekt przechodzi przez wielopoziomową kontrolę jakości' },
    { title: 'Partnerstwo', description: 'Traktujemy klientów jak długoterminowych partnerów biznesowych' },
    { title: 'Transparentność', description: 'Jasna komunikacja i brak ukrytych kosztów' }
  ];

  const testimonials = [
    { author: 'Jan Kowalski', company: 'TechMart CEO', text: 'Współpraca z UnitDev była doskonała. Zespół dostarczył rozwiązanie przekraczające nasze oczekiwania.' },
    { author: 'Anna Nowak', company: 'FinanceHub CTO', text: 'Profesjonalizm i terminowość. Polecam każdemu kto szuka solidnego partnera technologicznego.' },
    { author: 'Piotr Wiśniewski', company: 'SmartHome Founder', text: 'Dzięki UnitDev udało nam się wejść na rynek w rekordowym czasie.' }
  ];

  return (
    <>
      <Helmet>
        <title>O Nas - 15 Lat Doświadczenia, 500+ Projektów | UnitDev</title>
        <meta name="description" content="UnitDev to zespół 50+ ekspertów technologii z 15-letnim doświadczeniem. 500+ ukończonych projektów, 250+ zadowolonych klientów. Innowacyjność, jakość i partnerstwo." />
        <meta name="keywords" content="o firmie, doświadczenie IT, zespół programistów, historia firmy, wartości firmy, case studies, referencje" />
        <meta property="og:title" content="O Nas - 15 Lat Doświadczenia | UnitDev" />
        <meta property="og:description" content="Zespół pasjonatów technologii. 15 lat doświadczenia, 500+ projektów, najwyższa jakość." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://unitdev.pl/about" />
      </Helmet>
      
      <section className="page-header">
        <div className="container">
          <h1>O Nas</h1>
          <p>Poznaj naszą historię i wartości</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <h2>Kim Jesteśmy</h2>
          <p>UnitDev to zespół pasjonatów technologii z 15-letnim doświadczeniem w tworzeniu zaawansowanych rozwiązań programistycznych. Specjalizujemy się w projektach wymagających najwyższej jakości kodu i innowacyjnych podejść.</p>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <h2>Nasze Osiągnięcia</h2>
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

      <section className="values-section">
        <div className="container">
          <h2>Nasze Wartości</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Co Mówią Nasi Klienci</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
