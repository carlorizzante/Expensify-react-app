import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <h1>Expensify App</h1>
    <nav>
      <ul>
        Navigation
        <li><NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active" exact>Create Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active" exact>Help</NavLink></li>
        <li><NavLink to="/about" activeClassName="is-active" exact>About</NavLink></li>
        <li><NavLink to="/404" activeClassName="is-active" exact>404</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
