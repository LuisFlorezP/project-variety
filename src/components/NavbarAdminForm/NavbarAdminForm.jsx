import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"


// eslint-disable-next-line react/prop-types
const NavbarAdminForm = ({comeback}) => {
    return (
        <nav className="navbar">
        <Link to={"/"}>
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
        <section>
        <Link to={comeback}>
          <button className="navbar__button">volver</button>
        </Link>
        </section>
      </nav>
    );
}

export default NavbarAdminForm;
