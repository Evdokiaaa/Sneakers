import { NavLink } from "react-router-dom";
import NavLinksProps from "@/types/NavLinks";
const NavLinks = ({ id, name, url }: NavLinksProps) => {
  return (
    <li key={id} className="nav__item">
      <NavLink to={url}>{name}</NavLink>
    </li>
  );
};

export default NavLinks;
