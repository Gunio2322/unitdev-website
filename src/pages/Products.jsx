import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const Products = () => {
  const products = [
    {
      title: 'UnitCRM Pro',
      price: '499 zł',
      period: '/miesiąc',
      description: 'Kompleksowy system CRM dla średnich i dużych firm. Zarządzaj relacjami z klientami efektywnie.',
      image: '/images/Gemini_Generated_Image_cpa2pccpa2pccpa2.jpeg',
      badge: 'Bestseller',
      features: [
        '✓ Zarządzanie kontaktami i firmami',
        '✓ Automatyzacja procesów sprzedaży',
        '✓ Zaawansowane raporty i analityka',
        '✓ Integracja z e-mail i kalendarzem',
        '✓ Mobile app (iOS & Android)',
        '✓ Pipeline management',
        '✓ Prognozowanie sprzedaży',
        '✓ Wsparcie techniczne 24/7'
      ]
    },
    {
      title: 'UnitERP Suite',
      price: '899 zł',
      period: '/miesiąc',
      description: 'Zintegrowany system zarządzania przedsiębiorstwem. Kompleksowe rozwiązanie ERP.',
      image: '/images/Gemini_Generated_Image_pwu3zypwu3zypwu3.jpeg',
      features: [
        '✓ Moduł finansowo-księgowy',
        '✓ Zarządzanie magazynem i logistyką',
        '✓ Moduł HR i płace',
        '✓ Zarządzanie produkcją',
        '✓ Kontroling i budżetowanie',
        '✓ Business Intelligence',
        '✓ Integracja z systemami zewnętrznymi',
        '✓ Dedykowany opiekun klienta'
      ]
    },
    {
      title: 'UnitCloud',
      price: '299 zł',
      period: '/miesiąc',
      description: 'Platforma No-Code do tworzenia aplikacji bez kodowania. Idealna dla citizen developers.',
      image: '/images/Gemini_Generated_Image_updl5updl5updl5u.jpeg',
      badge: 'Nowość',
      features: [
        '✓ Drag & drop interface builder',
        '✓ Gotowe szablony aplikacji',
        '✓ Łatwe integracje z API',
        '✓ Automatyzacja workflow',
        '✓ Bazy danych w chmurze',
        '✓ Real-time collaboration',
        '✓ Custom branding',
        '✓ Nieograniczona liczba użytkowników'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Produkty - UnitCRM Pro, UnitERP Suite, UnitCloud | UnitDev</title>
        <meta name="description" content="Gotowe produkty SaaS: UnitCRM Pro (system CRM od 499 zł/mies), UnitERP Suite (zintegrowany ERP od 899 zł/mies), UnitCloud (platforma No-Code od 299 zł/mies)." />
        <meta name="keywords" content="CRM, ERP, No-Code platform, system CRM, system ERP, SaaS, oprogramowanie biznesowe, zarządzanie firmą" />
        <meta property="og:title" content="Produkty - UnitCRM Pro, UnitERP Suite, UnitCloud" />
        <meta property="og:description" content="Gotowe rozwiązania SaaS dla Twojego biznesu. CRM, ERP i platforma No-Code." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://unitdev.pl/products" />
      </Helmet>
      
      <section className="page-header">
        <div className="container">
          <h1>Nasze Produkty</h1>
          <p>Gotowe rozwiązania dla Twojego biznesu</p>
        </div>
      </section>

      <section className="products-detail">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <h2>Porównanie Produktów</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Funkcja</th>
                  <th>UnitCRM Pro</th>
                  <th>UnitERP Suite</th>
                  <th>UnitCloud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zarządzanie klientami</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Moduł finansowy</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>No-Code Builder</td>
                  <td>-</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Mobile App</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>API Integrations</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Wsparcie 24/7</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>Email only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
