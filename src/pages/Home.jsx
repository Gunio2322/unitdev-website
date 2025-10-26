import { Helmet } from 'react-helmet-async';
import HeroCard from '../components/HeroCard';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { HomeIcon, LayersIcon, ShieldIcon, GlobeIcon, SmartphoneIcon, CloudIcon, CpuIcon } from '../components/icons/Icons';
import '../styles/home.css';

const Home = () => {
  const services = [
    {
      icon: GlobeIcon,
      title: 'Aplikacje Webowe',
      description: 'Dla zaawansowanych projektów biznesowych i rozwiązań SaaS',
      linkTo: '/services'
    },
    {
      icon: SmartphoneIcon,
      title: 'Aplikacje Mobilne',
      description: 'Natywne i hybrydowe rozwiązania mobilne',
      linkTo: '/services'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Skalowalne systemy w chmurze dla każdej firmy',
      linkTo: '/services'
    },
    {
      icon: CpuIcon,
      title: 'AI & Machine Learning',
      description: 'Inteligentne rozwiązania wykorzystujące AI',
      linkTo: '/services'
    }
  ];

  const products = [
    {
      title: 'UnitCRM Pro',
      price: '499 zł',
      period: '/miesiąc',
      description: 'Kompleksowy system CRM dla średnich i dużych firm',
      image: '/images/Gemini_Generated_Image_cpa2pccpa2pccpa2.jpeg',
      badge: 'Bestseller',
      features: [
        '✓ Zarządzanie kontaktami',
        '✓ Automatyzacja sprzedaży',
        '✓ Zaawansowane raporty',
        '✓ Mobile app (iOS & Android)'
      ]
    },
    {
      title: 'UnitERP Suite',
      price: '899 zł',
      period: '/miesiąc',
      description: 'Zintegrowany system zarządzania przedsiębiorstwem',
      image: '/images/Gemini_Generated_Image_pwu3zypwu3zypwu3.jpeg',
      features: [
        '✓ Moduł finansowo-księgowy',
        '✓ Zarządzanie magazynem',
        '✓ Moduł HR i płace',
        '✓ Business Intelligence'
      ]
    },
    {
      title: 'UnitCloud',
      price: '299 zł',
      period: '/miesiąc',
      description: 'Platforma No-Code do tworzenia aplikacji',
      image: '/images/Gemini_Generated_Image_updl5updl5updl5u.jpeg',
      badge: 'Nowość',
      features: [
        '✓ Drag & drop interface',
        '✓ Gotowe szablony',
        '✓ Integracje z API',
        '✓ Real-time collaboration'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projektów Ukończonych' },
    { number: '250+', label: 'Zadowolonych Klientów' },
    { number: '50+', label: 'Członków Zespołu' },
    { number: '15', label: 'Lat Doświadczenia' }
  ];

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
        <title>UnitDev - Profesjonalne Rozwiązania Programistyczne | Aplikacje Web i Mobile</title>
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
          <h1>Profesjonalne Rozwiązania Programistyczne</h1>
          <p>Tworzymy nowoczesne aplikacje webowe, mobilne i systemy enterprise</p>
          <div className="hero-cards">
            <HeroCard 
              icon={HomeIcon}
              title="Pełny Zakres Usług"
              description="Od prostych stron po złożone systemy enterprise"
              linkTo="/services"
              linkText="Zobacz więcej"
            />
            <HeroCard 
              icon={LayersIcon}
              title="Nowoczesne Technologie"
              description="Wykorzystujemy najnowsze frameworki i narzędzia"
              linkTo="/products"
              linkText="Nasze produkty"
            />
            <HeroCard 
              icon={ShieldIcon}
              title="Wsparcie 24/7"
              description="Eksperckie wsparcie techniczne bez ukrytych opłat"
              linkTo="/contact"
              linkText="Kontakt"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Nasze Usługi</h2>
          <p className="section-subtitle">Kompleksowe rozwiązania IT dostosowane do Twoich potrzeb</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2>Nasze Produkty</h2>
          <p className="section-subtitle">Gotowe rozwiązania oszczędzające Twój czas i budżet</p>
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
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
