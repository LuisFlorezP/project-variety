import CardHome from "../CardHome/CardHome";
import "./ServiceTwo.css";
import iconOne from "../../assets/IconOne.svg";
import iconTwo from "../../assets/IconTwo.svg";
import iconThree from "../../assets/IconThree.svg";

const ServiceTwo = () => {
  return (
    <section className="container__servicetwo">
      <section className="container__info">
        <h1>How can we help your business?</h1>
        <p>When you resell besnik, you build trust and increase</p>
      </section>
      <section className="container__cards">
        <CardHome
          icon={iconOne}
          tittle={"Find out what you need"}
          text={"We present you a proposal and discuss nitty- gritty like"}
        />
        <CardHome
          icon={iconTwo}
          tittle={"Work out the details"}
          text={"Communication protocols apart from engagement models"}
        />
        <CardHome
          icon={iconThree}
          tittle={"We get to work fast"}
          text={"Protocols apart from engage models, pricing billing"}
        />
      </section>
      <section className="container__button">
        <button>Become a Partner</button>
      </section>
    </section>
  );
};

export default ServiceTwo;
