import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { GlobeIcon, SmartphoneIcon, CloudIcon, CpuIcon } from '../components/icons/Icons';
import '../styles/services.css';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Aplikacje Webowe do Wizualizacji Danych z PLC | Node.js React | Enerjana';
    
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

    updateMetaTag('description', 'Tworzę aplikacje webowe do wizualizacji i monitoringu danych z PLC. Node.js + React + Modbus TCP. Specjalizacja: integracja sterowników Mitsubishi i Siemens z systemami webowymi.');
    updateMetaTag('keywords', 'aplikacje webowe do PLC, wizualizacja danych PLC, Node.js Modbus TCP, React dashboard przemysłowy, programowanie sterowników Mitsubishi, integracja Siemens PLC, monitoring maszyn produkcyjnych, Node.js automatyka');
    updateMetaTag('og:title', 'Aplikacje Webowe do Wizualizacji Danych z PLC | Node.js React | Enerjana', true);
    updateMetaTag('og:description', 'Tworzę aplikacje webowe do wizualizacji i monitoringu danych z PLC. Node.js + React + Modbus TCP.', true);
    updateMetaTag('og:url', 'https://enerjana.pl/services', true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://enerjana.pl/services');
    }
  }, [location]);

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
