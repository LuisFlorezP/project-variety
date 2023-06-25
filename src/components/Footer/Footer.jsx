import { Link } from "react-router-dom";
import logoFooter from "../../assets/logoFooter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="container__footer">
        <img className="container__footer-logo" src={logoFooter} alt="" />
        <section className="container__footer-section">
          <span>Company</span>
          <ul className="container__footer-ul">
            <Link to={"/"}>Home</Link>

            <Link to={"/movies"}>Movies</Link>
            <Link to={"/customers"}>Customers</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/suppliers"}>Suppliers</Link>
            <Link to={"/employees"}>Employees</Link>
            <Link to={"/passwords"}>Passwords</Link>
          </ul>
        </section>

        <section className="container__footer-section">
          <span>Get Help</span>
          <ul className="container__footer-ul">
            <Link>Assistance</Link>
            <Link>Support</Link>
            <Link>Guidance</Link>
            <Link>Resources</Link>
            <Link>Contact</Link>
            <Link>FAQ</Link>
            <Link>Chat</Link>
          </ul>
        </section>

        <section className="container__footer-section">
          <span>Support</span>
          <ul className="container__footer-ul">
            <Link>Help</Link>
            <Link>Questions</Link>
            <Link>Chat</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>
            <Link>Support</Link>
            <Link>Info</Link>
          </ul>
        </section>

        <section className="container__footer-section">
          <span>Contact</span>
          <ul className="container__footer-ul">
            <Link>Facebook</Link>
            <Link>Slack</Link>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
            <Link>WhatsApp</Link>
            <Link>linkedIn</Link>
            <Link>Google</Link>
          </ul>
        </section>
      </section>
      <section className="container__footer-copy">
        <span>© 2023 - Inc. All rights reserved.</span>
      </section>
    </footer>
  );
};

export default Footer;
