import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-light">
      <div className="container">
        <nav className="navbar">
          <NavLink className="navbar__link" to="/">
            Список дел
          </NavLink>
          <NavLink className="navbar__link" to="/form">
            Форма
          </NavLink>
          <NavLink className="navbar__link" to="/cart">
            Карточки Героев
          </NavLink>
          <NavLink className="navbar__link" to="/info">
            О нас
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
