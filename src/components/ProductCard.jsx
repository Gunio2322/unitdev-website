import { Link } from 'react-router-dom';
import '../styles/product-card.css';

const ProductCard = ({ title, price, period, description, features, image, badge, linkTo = '/contact' }) => {
  return (
    <div className={`product-card ${badge === 'Bestseller' ? 'featured' : ''}`}>
      {badge && <div className="product-badge">{badge}</div>}
      {image && (
        <div className="product-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <h3>{title}</h3>
      {price && (
        <div className="product-price">
          <span className="price">{price}</span>
          <span className="period">{period}</span>
        </div>
      )}
      <p>{description}</p>
      {features && (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <Link to={linkTo} className="btn-primary">
        {badge === 'Bestseller' ? 'Wypróbuj za darmo' : badge === 'Nowość' ? 'Zacznij teraz' : 'Umów prezentację'}
      </Link>
    </div>
  );
};

export default ProductCard;
