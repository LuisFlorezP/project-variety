import { Link } from "react-router-dom";
import "./Navbar.css";
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
      <button className="navbar__button">Sing up</button>

    </nav>
  );
};

export default Navbar;
