import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth.js';

export const Header = (props) => (
  <header className="header">
    <div className="content-container header__content">
      <Link className="header__title" to="/dashboard">
        <h1>Expensify App</h1>
      </Link>
      <button
        className="btn btn-link"
        onClick={ props.startLogout }
      >Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
