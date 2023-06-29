import "./Navbars.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { RiArrowLeftCircleLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const NavbarAdminForm = ({comeback}) => {
    return (
        <nav className="navbar">
        <Link to={"/"}>
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
        <section>
        <Link to={comeback}>
          <RiArrowLeftCircleLine id="icon" className="icon-1" />
        </Link>
        </section>
      </nav>
    );
}

export default NavbarAdminForm;
