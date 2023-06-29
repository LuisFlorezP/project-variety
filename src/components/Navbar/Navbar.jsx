
import { Link } from "react-router-dom";
import "./Navbars.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img className="navbar__logo" src={logo} alt="logo" />
      </Link>
      <ul className="navbar__links">
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/customers"}>Customers</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/suppliers"}>Suppliers</Link>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/passwords"}>Passwords</Link>
      </ul>
      <Link to={"/admin"}>
        <button className="navbar__button">Sign up</button>
      </Link>
    </nav>
  );
};

export default Navbar;

