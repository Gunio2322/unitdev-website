import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Enerjana</h3>
            <p>Profesjonalne rozwiązania programistyczne dla Twojego biznesu</p>
          </div>
          <div className="footer-section">
            <h4>Nawigacja</h4>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/services">Usługi</Link></li>
              <li><Link to="/monitoring">Monitoring</Link></li>
              <li><Link to="/dashboards">Dashboardy</Link></li>
              <li><Link to="/integration">Integracja PLC</Link></li>
              <li><Link to="/about">O mnie</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li>Mariusz Głuszcz</li>
              <li>Cielądz 42a, Polska</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://linkedin.com/in/mariusz-głuszcz-583931184">LinkedIn</a></li>
              <li><a href="https://github.com/Gunio2322">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Mariusz Głuszcz. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
