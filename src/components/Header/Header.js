import logo from "../../assets/images/Logo.svg";

import "./Header.scss";

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="logo"/>
  </header>
);

export default Header;
