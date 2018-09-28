import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

// import Header from '../components/Header.js';

import AboutPage from '../components/AboutPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import HelpPage from '../components/HelpPage.js';
import LoginPage from '../components/LoginPage.js';
import Page404 from '../components/Page404.js';

export const history = createHistory();

const AppRouter = (props) => (
  // BrowserRouter has history build in
  // we pass history to Router to use history outside a component
  // more precisely, in App.js
  <Router history={ history }>
    <div>
      {/* <Header/> */}
      <Switch>
        <PublicRoute path="/" component={ LoginPage } exact/>
        <PrivateRoute path="/dashboard" component={ ExpenseDashboardPage } exact/>
        <PrivateRoute path="/create" component={ AddExpensePage } exact/>
        <PrivateRoute path="/edit/:id" component={ EditExpensePage } exact/>
        <Route component={ Page404 }/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
