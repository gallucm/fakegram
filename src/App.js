import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { Account } from './pages/AccountPage';
import { AuthPage } from './pages/AuthPage';
import { Index } from './pages/MainPage';
import { MessagesPage } from './pages/MessagesPage';
import { NotFound } from './pages/NotFoundPage';
import { Profile } from './pages/ProfilePage';

export const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/account/detail" component={Account} />
        <Route exact path="/login" component={AuthPage} />
        <Route exact path="/register" component={AuthPage} />
        <Route exact path="/messages" component={MessagesPage} />
        <Route exact path="/:id" component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
  )
}
