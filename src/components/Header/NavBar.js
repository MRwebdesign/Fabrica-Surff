import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
<nav className="navbar">
  <div className="logo">
  <Link to="/"><img src="http://surffojotas.com/wp-content/uploads/2018/03/Folletos-Ojotas-Surff-1.jpg" alt="LOGO"/></Link>
  </div>
  <div><Link to="/"><p className="Style-Text-Name">Fabrica de Ojotas y Suelas para Calzado Materiales Expandidos y Rígidos</p></Link></div>
  <div className="push-left">
    <button id="menu-toggler" data-class="menu-active" className="hamburger">
      <span className="hamburger-line hamburger-line-top"></span>
      <span className="hamburger-line hamburger-line-middle"></span>
      <span className="hamburger-line hamburger-line-bottom"></span>
    </button>

    <ul id="primary-menu" className="menu nav-menu">     
    <Nav className="me-auto ms-5">
                    <Link className="nav-link" to={"/categoria/1"}>Crocs</Link>
                    <Link className="nav-link" to={"/categoria/2"}>Ojotas Clasicas</Link>
                    <Link className="nav-link" to={"/categoria/3"}>Ojotas Fajas</Link>
                    <CartWidget/>
                </Nav>
    </ul>
  </div>
</nav>
</Navbar>
  );
};

export default NavBar;
