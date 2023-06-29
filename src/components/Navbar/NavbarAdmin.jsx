import "./Navbars.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { RiArrowLeftCircleLine, RiAddFill } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
const NavbarAdmin = ({form}) => {
    return (
        <nav className="navbar">
        <Link to={"/"}>
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>
        <section>
        <Link to={"/adminoptions"}>
          <RiArrowLeftCircleLine id="icon" className="icon-1" />
        </Link>
        <Link to={form}>
        <RiAddFill id="icon" className="icon-1" />
        </Link>
        </section>
      </nav>
    );
}

export default NavbarAdmin;
