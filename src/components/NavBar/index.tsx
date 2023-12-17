import { links } from "@/utils/constants";
import NavLinks from "./NavLinks";
import "./styles.scss";
const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        {links.map(({ id, name, url }) => (
          <NavLinks key={id} id={id} name={name} url={url} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
