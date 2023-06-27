import './CardAdmin.css';
import { Link } from 'react-router-dom';

const CardAdmin = ({ title, description, link }) => {
  return (
    <section className="card-Admin">
      <section className="card-content-Admin">
        <h2 className="card-title-Admin">{title}</h2>
        <p className="card-description-Admin">{description}</p>
        <Link to={link} className="card-button-Admin">Ir a la página</Link>
      </section>
    </section>
  );
}

export default CardAdmin;