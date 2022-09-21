import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/MenuUpdater">Menu Updater</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
