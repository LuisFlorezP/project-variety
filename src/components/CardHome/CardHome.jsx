import "./CardHome.css";

// eslint-disable-next-line react/prop-types
const CardHome = ({ icon, tittle, text }) => {
  return (
    <section className="container__card">
      <section className="container__card-img">
        <img src={icon} alt="icon" />
      </section>
      <section className="container__card-info">
        <h3>{tittle}</h3>
        <p>{text}</p>
      </section>
    </section>
  );
};

export default CardHome;
