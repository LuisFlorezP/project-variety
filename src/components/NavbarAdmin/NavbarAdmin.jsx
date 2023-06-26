import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"


// eslint-disable-next-line react/prop-types
const NavbarAdmin = ({form}) => {
    return (
        <nav className="navbar">
        <Link to={"/"}>
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
        <section>
        <Link to={"/adminoptions"}>
          <button className="navbar__button">volver</button>
        </Link>
        <Link to={form}>
          <button className="navbar__button">crear</button>
        </Link>
        </section>
      </nav>
    );
}

export default NavbarAdmin;
