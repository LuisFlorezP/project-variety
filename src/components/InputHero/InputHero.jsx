import { RiArrowLeftUpLine} from "react-icons/ri";

import "./InputHero.css"

const InputHero = () => {
  return (
    <section className="container__input">
      <input type="email" placeholder="Email address" />
      <button> <RiArrowLeftUpLine className="icon__arrow"/></button>
    </section>
  );
};


export default InputHero;
