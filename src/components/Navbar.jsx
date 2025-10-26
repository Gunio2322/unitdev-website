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
          <Link to="/">Enerjana</Link>
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
