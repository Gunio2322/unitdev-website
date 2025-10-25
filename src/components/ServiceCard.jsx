import { Link } from 'react-router-dom';
import '../styles/service-card.css';

const ServiceCard = ({ icon: Icon, title, description, features, linkTo = '/contact' }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <Link to={linkTo} className="btn-learn">
        {linkTo === '/contact' ? 'Zapytaj o wycenę' : 'Dowiedz się więcej'}
      </Link>
    </div>
  );
};

export default ServiceCard;
