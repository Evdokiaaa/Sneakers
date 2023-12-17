import Nav from "@/components/NavBar";
import Cart from "@/components/Cart";
import Login from "../Login";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">Sneakers</h1>
        <Nav />
        <Cart />
        <Login />
      </div>
    </header>
  );
};

export default Header;
