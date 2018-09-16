import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

export const LoginPage = (props) => (
  <div>
    <h1>Login</h1>
    <p>please authenticate</p>
    <button
      className="btn btn-primary"
      onClick={ props.startLogin }
    >Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
