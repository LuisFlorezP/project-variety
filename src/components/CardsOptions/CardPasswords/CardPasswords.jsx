import './Card.css';

const CardPasswords = ({ id, nombre, barrio, ciudad, correo, direccion, documento, telefono, valor, imagen }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{nombre}</h3>
      </div>
      <div className="card-body">
        <div className="card-image">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="card-info">
          <p>ID: {id}</p>
          <p>Barrio: {barrio}</p>
          <p>Ciudad: {ciudad}</p>
          <p>Correo: {correo}</p>
          <p>Dirección: {direccion}</p>
          <p>Documento: {documento}</p>
          <p>Teléfono: {telefono}</p>
          <p>Valor: {valor}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPasswords;
