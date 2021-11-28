import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { Navbar } from './components/ui/Navbar';
import { Account } from './pages/Account';
import { Index } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/:id" component={Profile} />
        <Route exact path="/:id/details" component={Account} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navbar>
  )
}
