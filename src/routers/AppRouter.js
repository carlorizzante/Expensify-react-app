import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.js';

import AboutPage from '../components/AboutPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import HelpPage from '../components/HelpPage.js';
import Page404 from '../components/Page404.js';

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ ExpenseDashboardPage } exact/>
        <Route path="/create" component={ AddExpensePage } exact/>
        <Route path="/edit/:id" component={ EditExpensePage } exact/>
        <Route path="/help" component={ HelpPage } exact/>
        <Route path="/about" component={ AboutPage }/>
        <Route component={ Page404 }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
