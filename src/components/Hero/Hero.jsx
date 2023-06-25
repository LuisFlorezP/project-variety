import hero from "../../assets/hero.svg";
import InputHero from "../InputHero/InputHero";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="header__hero">
      <section className="header__hero-text">
        <h4>We boost the growth for <span>Startup</span> to Fortune 500 Companies</h4>
        <p>
        Get the most accurate leads, sales peopele training and conversions, tools and more — all within the same one billing.
        </p>
        <section className="header__hero-input">
        <InputHero/>
        </section>
      </section>

      <section className="header__hero-img">
        <img src={hero} alt="hero-img" />
      </section>
    </header>
  );
};

export default Hero;
