import React from "react";
import { Link } from "react-router-dom";
import { links } from "@/utils/constants";
import "./styles.scss";
const NavBar = () => {
  return (
    <nav>
      <ul>
        {links.map(({ id, name, url }) => {
          return (
            <li key={id} className="nav__item">
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
