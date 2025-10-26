import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>UnitDev</h3>
            <p>Profesjonalne rozwiązania programistyczne dla Twojego biznesu</p>
          </div>
          <div className="footer-section">
            <h4>Nawigacja</h4>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/services">Usługi</Link></li>
              <li><Link to="/about">O nas</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li>Email: kontakt@unitdev.pl</li>
              <li>Tel: +48 123 456 789</li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 UnitDev. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
