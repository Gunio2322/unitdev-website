import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

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

  return (
    <>
      <Helmet>
        <title>Kontakt - Skontaktuj się z Nami | UnitDev</title>
        <meta name="description" content="Skontaktuj się z UnitDev. Email: kontakt@unitdev.pl, Tel: +48 123 456 789. Warszawa, Polska. Wsparcie 24/7 dla klientów premium. Bezpłatna wycena projektu." />
        <meta name="keywords" content="kontakt, wycena projektu, email, telefon, Warszawa, konsultacja IT, wsparcie techniczne" />
        <meta property="og:title" content="Kontakt - Skontaktuj się z Nami | UnitDev" />
        <meta property="og:description" content="Omówmy Twój projekt. Bezpłatna wycena i konsultacja." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://unitdev.pl/contact" />
      </Helmet>
      
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
                <h3>Email</h3>
                <p>kontakt@unitdev.pl</p>
              </div>
              <div className="contact-item">
                <h3>Telefon</h3>
                <p>+48 123 456 789</p>
              </div>
              <div className="contact-item">
                <h3>Adres</h3>
                <p>ul. Przykładowa 123<br />00-001 Warszawa, Polska</p>
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
            <p>Mapa - Warszawa, ul. Przykładowa 123</p>
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
