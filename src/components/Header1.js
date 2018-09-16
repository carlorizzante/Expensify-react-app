import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth.js';

export const Header = (props) => (
  <header>
    <h1>Expensify App</h1>
    <nav>
      <ul>
        Navigation
        <li><NavLink to="/" activeClassName="is-active" exact>Login</NavLink></li>
        <li><NavLink to="/dashboard" activeClassName="is-active" exact>Dashboard</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active" exact>Create Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active" exact>Help</NavLink></li>
        <li><NavLink to="/about" activeClassName="is-active" exact>About</NavLink></li>
        <li><NavLink to="/404" activeClassName="is-active" exact>404</NavLink></li>
        <li><button
          className="btn btn-primary"
          onClick={ props.startLogout }
        >Logout</button></li>
      </ul>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
