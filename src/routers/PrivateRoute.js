import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header1 from '../components/Header1.js';
import Header2 from '../components/Header2.js';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route { ...rest } component={ (props) => (
    isAuthenticated
    ? [
      <Header1 key="1" />,
      <Component key="2" { ...props } />
    ]
    : [
      <Header2 key="1" />,
      <Redirect key="2" to='/'/>
    ]
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
