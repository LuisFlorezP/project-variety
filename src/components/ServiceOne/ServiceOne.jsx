import iconFour from "../../assets/IconFour.svg";
import iconFive from "../../assets/iconFive.svg";

import "./ServiceOne.css";

const ServiceOne = () => {
  return (
    <section className="container__serviceone">
      <section className="container__serviceone-inter">
        <section className="container__serviceone-info">
          <span>ACHIEVE MORE</span>
          <h4>Purpose of a convoy is to keep your team</h4>
        </section>

        <section className="container__serviceone-card">
          <section className="container__serviceone-card-img">
            <img src={iconFour}/>
          </section>

          <section className="container__serviceone-card-info">
            <h4>Built for impact</h4>
            <p>
              We identify and nurture a truly diverse team of designers,
              developers and marketers
            </p>
          </section>
        </section>

        <section className="container__serviceone-card">
          <section className="container__serviceone-card-img">
            <img src={iconFive}/>
          </section>
          <section className="container__serviceone-card-info">
            <h4>In sync with you</h4>
            <p>
            We identify and nurture a truly diverse team of designers,
              developers and marketers
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServiceOne;
