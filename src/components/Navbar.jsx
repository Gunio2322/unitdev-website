import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <style>{`
                .logo-svg .logo-text {
                  font-family: Arial, sans-serif;
                  font-size: 64px;
                  font-weight: 700;
                  fill: #00a8ff;
                  letter-spacing: 2px;
                }
                .logo-svg .tagline-text {
                  font-family: Arial, sans-serif;
                  font-size: 12px;
                  fill: #64748b;
                  letter-spacing: 2px;
                }
                
                .logo-svg .letter {
                  opacity: 0.2;
                  animation: brighten 0.6s ease forwards;
                }
                
                @keyframes brighten {
                  to {
                    opacity: 1;
                  }
                }
                
                .logo-svg .letter:nth-child(1) { animation-delay: 0.5s; }
                .logo-svg .letter:nth-child(2) { animation-delay: 1.2s; }
                .logo-svg .letter:nth-child(3) { animation-delay: 0.3s; }
                .logo-svg .letter:nth-child(4) { animation-delay: 1.5s; }
                .logo-svg .letter:nth-child(5) { animation-delay: 0.9s; }
                .logo-svg .letter:nth-child(6) { animation-delay: 0.1s; }
                .logo-svg .letter:nth-child(7) { animation-delay: 1.8s; }
                .logo-svg .letter:nth-child(8) { animation-delay: 0.7s; }
                
                .logo-svg .tagline {
                  opacity: 0;
                  animation: fadeIn 1s ease 2.5s forwards;
                }
                
                @keyframes fadeIn {
                  to { opacity: 1; }
                }
              `}</style>
              
              <text x="200" y="70" textAnchor="middle" className="logo-text">
                <tspan className="letter">e</tspan>
                <tspan className="letter">n</tspan>
                <tspan className="letter">e</tspan>
                <tspan className="letter">r</tspan>
                <tspan className="letter">j</tspan>
                <tspan className="letter">a</tspan>
                <tspan className="letter">n</tspan>
                <tspan className="letter">a</tspan>
              </text>
              
              <text x="200" y="100" textAnchor="middle" className="tagline-text tagline">
                Automation • Web Solutions
              </text>
            </svg>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Start</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Usługi</Link></li>
          <li><Link to="/monitoring" className={location.pathname === '/monitoring' ? 'active' : ''}>Monitoring</Link></li>
          <li><Link to="/dashboards" className={location.pathname === '/dashboards' ? 'active' : ''}>Dashboardy</Link></li>
          <li><Link to="/integration" className={location.pathname === '/integration' ? 'active' : ''}>Integracja PLC</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>O nas</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Kontakt</Link></li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
