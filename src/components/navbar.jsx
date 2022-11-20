import Logo from "./Navbar/logo";
import Menu from "./Navbar/menu";
import Cart from "./Navbar/cart";
import User from "./Navbar/user";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <div className="navbar-right">
        <Menu />
        <Cart />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
