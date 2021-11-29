import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { Navbar } from './components/ui/Navbar';
import { Account } from './pages/AccountPage';
import { AuthPage } from './pages/AuthPage';
import { Index } from './pages/MainPage';
import { NotFound } from './pages/NotFoundPage';
import { Profile } from './pages/ProfilePage';

export const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/p/:id" component={Profile} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={AuthPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navbar>
  )
}
