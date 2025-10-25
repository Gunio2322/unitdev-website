import ServiceCard from '../components/ServiceCard';
import { GlobeIcon, SmartphoneIcon, CloudIcon, CpuIcon, LockIcon, SettingsIcon } from '../components/icons/Icons';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      icon: GlobeIcon,
      title: 'Aplikacje Webowe',
      description: 'Tworzymy zaawansowane aplikacje webowe wykorzystując najnowsze technologie.',
      image: '/images/dmitrii-filatov-pCTWnXabxcA-unsplash.jpg',
      features: [
        '✓ React, Vue.js, Angular',
        '✓ Node.js, Django, Laravel',
        '✓ Progressive Web Apps (PWA)',
        '✓ Single Page Applications (SPA)',
        '✓ REST API & GraphQL'
      ]
    },
    {
      icon: SmartphoneIcon,
      title: 'Aplikacje Mobilne',
      description: 'Natywne i hybrydowe rozwiązania mobilne na iOS i Android.',
      image: '/images/steve-busch-aMC_8t7gRWk-unsplash.jpg',
      features: [
        '✓ React Native',
        '✓ Flutter',
        '✓ Swift & Kotlin',
        '✓ Integracja z API',
        '✓ Push notifications'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Rozwiązania Cloud',
      description: 'Skalowalne systemy w chmurze dla każdej wielkości firmy.',
      image: '/images/yousef-espanioly-TB8ziZJtYJ0-unsplash.jpg',
      features: [
        '✓ AWS, Azure, Google Cloud',
        '✓ Kubernetes & Docker',
        '✓ Serverless architecture',
        '✓ CI/CD pipelines',
        '✓ Infrastructure as Code'
      ]
    },
    {
      icon: CpuIcon,
      title: 'AI & Machine Learning',
      description: 'Wdrażamy rozwiązania sztucznej inteligencji i uczenia maszynowego.',
      image: '/images/Gemini_Generated_Image_4xjuei4xjuei4xju.jpeg',
      features: [
        '✓ Natural Language Processing',
        '✓ Computer Vision',
        '✓ Predictive Analytics',
        '✓ Chatboty i asystenci AI',
        '✓ Deep Learning models'
      ]
    },
    {
      icon: LockIcon,
      title: 'Cyberbezpieczeństwo',
      description: 'Kompleksowe audyty bezpieczeństwa i ochrona systemów.',
      features: [
        '✓ Penetration testing',
        '✓ Security audits',
        '✓ GDPR compliance',
        '✓ Zarządzanie podatnościami',
        '✓ Szkolenia bezpieczeństwa'
      ]
    },
    {
      icon: SettingsIcon,
      title: 'DevOps & CI/CD',
      description: 'Automatyzacja procesów wdrożeniowych i infrastruktury.',
      features: [
        '✓ Jenkins, GitLab CI, GitHub Actions',
        '✓ Docker & Kubernetes',
        '✓ Monitoring i logging',
        '✓ Infrastructure automation',
        '✓ Performance optimization'
      ]
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Nasze Usługi</h1>
          <p>Kompleksowe rozwiązania programistyczne dla Twojego biznesu</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Gotowy na rozpoczęcie projektu?</h2>
          <p>Skontaktuj się z nami i omówmy Twoje potrzeby</p>
          <a href="/contact" className="btn-primary">Skontaktuj się</a>
        </div>
      </section>
    </>
  );
};

export default Services;
