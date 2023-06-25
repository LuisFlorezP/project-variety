import "./CardMovie.css";

// eslint-disable-next-line react/prop-types
const CardMovie = ({ backgroundImage, title, description, rating }) => {
  return (
    <section className="card__container">
      <section
        className="card__container-upper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></section>

      <section className="card__container-middle">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </section>
      <section className="card__container-lower">
        <span>Rating:</span>
        <h4>{rating}</h4>
      </section>
    </section>
  );
};

export default CardMovie;
