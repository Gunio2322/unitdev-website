import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/contact.css';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    document.title = 'Kontakt - Skontaktuj się z Nami | Enerjana';
    
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

    updateMetaTag('description', 'Omówmy Twój projekt. Bezpłatna wycena i konsultacja. Mariusz Głuszcz, Cielądz 42a, woj. łódzkie. Tel: +48 792 425 411. Email: enerjana2@gmail.com');
    updateMetaTag('keywords', 'kontakt automatyk, wycena aplikacja przemysłowa, konsultacja automatyka, Cielądz Łódzkie, oferta monitoring produkcji, zapytanie integracja PLC');
    updateMetaTag('og:title', 'Kontakt - Skontaktuj się z Nami | Enerjana', true);
    updateMetaTag('og:description', 'Omówmy Twój projekt. Bezpłatna wycena i konsultacja.', true);
    updateMetaTag('og:url', 'https://enerjana.pl/contact', true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://enerjana.pl/contact');
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      showNotification('Musisz zaakceptować politykę prywatności', 'error');
      return;
    }

    // Tutaj będzie integracja z backend API
    console.log('Form submitted:', formData);
    showNotification('Wiadomość została wysłana! Odezwiemy się wkrótce.', 'success');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 5000);
  };

  // Obfuskowany numer
  const getPhone = () => {
    const parts = ['792', '425', '411'];
    return `+48 ${parts.join(' ')}`;
  };

  // Obfuskowany email
  const getEmail = () => {
    const parts = ['enerjana2', 'gmail', 'com'];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Skontaktuj się z nami i omówmy Twój projekt</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informacje Kontaktowe</h2>
              <div className="contact-item">
                <h3>Właściciel</h3>
                <p>Mariusz Głuszcz</p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <div>
                  {showEmail ? (
                    <a href={`mailto:${getEmail()}`}>{getEmail()}</a>
                  ) : (
                    <button 
                      onClick={() => setShowEmail(true)}
                      className="btn-show-phone"
                    >
                      Pokaż adres email
                    </button>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <h3>Telefon</h3>
                <div>
                  {showPhone ? (
                    <a href={`tel:+48792425411`}>{getPhone()}</a>
                  ) : (
                    <button 
                      onClick={() => setShowPhone(true)}
                      className="btn-show-phone"
                    >
                      Pokaż numer telefonu
                    </button>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <h3>Adres</h3>
                <p>Cielądz 42a<br />96-14 Cielądz, Polska</p>
              </div>
              <div className="contact-item">
                <h3>Godziny Pracy</h3>
                <p>Pon - Pt: 9:00 - 17:00<br />Wsparcie 24/7 dla klientów premium</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Imię i Nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Temat *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Wybierz temat</option>
                    <option value="project">Nowy Projekt</option>
                    <option value="support">Wsparcie Techniczne</option>
                    <option value="partnership">Współpraca</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Wiadomość *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="privacy">Akceptuję politykę prywatności *</label>
                </div>

                <button type="submit" className="btn-primary">Wyślij wiadomość</button>
              </form>
            </div>
          </div>

          <div className="map-placeholder">
            <p>Mapa - Cielądz, Cielądz 42a</p>
          </div>
        </div>
      </section>

      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </>
  );
};

export default Contact;
