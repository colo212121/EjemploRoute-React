import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contactos">Contactos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
