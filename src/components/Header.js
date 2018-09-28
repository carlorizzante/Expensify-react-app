import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth.js';

export const Header = (props) => (
  <header>
    <h1>Expensify App</h1>
    <nav>
      <ul>
        <li><NavLink to="/dashboard" activeClassName="is-active" exact>Dashboard</NavLink></li>
        <li><NavLink to="/create"    activeClassName="is-active" exact>Create Expense</NavLink></li>
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
