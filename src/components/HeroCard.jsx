import { Link } from 'react-router-dom';
import '../styles/hero-card.css';

const HeroCard = ({ icon: Icon, title, description, linkTo, linkText }) => {
  return (
    <div className="hero-card">
      <div className="hero-card-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo} className="btn-learn">{linkText}</Link>
    </div>
  );
};

export default HeroCard;
