import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { GlobeIcon, SmartphoneIcon, CloudIcon, CpuIcon } from '../components/icons/Icons';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      icon: GlobeIcon,
      title: 'Aplikacje Webowe dla Przemysłu',
      description: 'Tworzę aplikacje webowe do monitorowania i sterowania procesami przemysłowymi',
      linkTo: '/services'
    },
    {
      icon: SmartphoneIcon,
      title: 'Wizualizacja Danych Produkcyjnych',
      description: 'Budowa systemów wizualizacji danych z PLC (Node.js, React, MongoDB',
      linkTo: '/services'
    },
    {
      icon: CloudIcon,
      title: 'Dashboardy i Raporty',
      description: 'Projektowanie dashboardów przemysłowych z monitoringiem Real-Time',
      linkTo: '/services'
    },
    {
      icon: CpuIcon,
      title: 'Integracja OT z IT',
      description: 'Integracjia sterowników PLC (Mitsubishi, Siemens) z systemami IT',
      linkTo: '/services'
    },
    {
      icon: CpuIcon,
      title: 'Automatyka Klasyczna',
      description: 'Programowanie sterowników i budowie szaf sterowniczych',
      linkTo: '/services'
    },
    {
      icon: CpuIcon,
      title: 'AI & Machine Learning',
      description: 'Programowaniu sterowników i budowie szaf sterowniczych',
      linkTo: '/services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Usługi IT - Aplikacje Web, Mobile, Cloud, AI | UnitDev</title>
        <meta name="description" content="Oferujemy kompleksowe usługi IT: aplikacje webowe (React, Vue, Angular), mobilne (iOS, Android), Cloud Solutions (AWS, Azure), AI & Machine Learning, cyberbezpieczeństwo i DevOps." />
        <meta name="keywords" content="usługi IT, tworzenie aplikacji webowych, aplikacje mobilne, cloud computing, AI, machine learning, cyberbezpieczeństwo, DevOps, CI/CD" />
        <meta property="og:title" content="Usługi IT - Aplikacje Web, Mobile, Cloud, AI | UnitDev" />
        <meta property="og:description" content="Kompleksowe usługi programistyczne: aplikacje webowe, mobilne, Cloud Solutions, AI i cyberbezpieczeństwo." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://unitdev.pl/services" />
      </Helmet>
      
      <section className="page-header">
        <div className="container">
          <h1>Moje Usługi</h1>
          <p>Kompleksowe rozwiązania IT dostosowane do Twoich potrzeb</p>
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
    </>
  );
};

export default Services;
