import './CardAdmin.css';
import { Link } from 'react-router-dom';

const CardAdmin = ({ title, description, link }) => {
  return (
    <section className="card">
      <section className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-button">Ir a la página</Link>
      </section>
    </section>
  );
}

export default CardAdmin;