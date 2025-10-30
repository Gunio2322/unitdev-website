import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Loader from './components/Loader';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Monitoring from './pages/Monitoring';
import Dashboards from './pages/Dashboards';
import Integration from './pages/Integration';
import './styles/main.css';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/integration" element={<Integration />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;