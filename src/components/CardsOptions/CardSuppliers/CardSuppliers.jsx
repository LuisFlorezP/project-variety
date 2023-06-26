import './Card.css';

const CardSuppliers = ({ id, nombre, barrio, ciudad, correo, direccion, documento, telefono, valor, imagen }) => {
  return (
    <section className="card">
      <section className="card-header">
        <h3>{nombre}</h3>
      </section>
      <section className="card-body">
        <section className="card-image">
          <img src={imagen} alt={nombre} />
        </section>
        <section className="card-info">
          <p>ID: {id}</p>
          <p>Barrio: {barrio}</p>
          <p>Ciudad: {ciudad}</p>
          <p>Correo: {correo}</p>
          <p>Dirección: {direccion}</p>
          <p>Documento: {documento}</p>
          <p>Teléfono: {telefono}</p>
          <p>Valor: {valor}</p>
        </section>
      </section>
    </section>
  );
};

export default CardSuppliers;
