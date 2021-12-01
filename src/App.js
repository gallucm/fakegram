import { Switch, Redirect } from 'react-router-dom';

import { Account } from './pages/AccountPage';
import { AuthPage } from './pages/AuthPage';
import { Index } from './pages/MainPage';
import { MessagesPage } from './pages/MessagesPage';
import { Profile } from './pages/ProfilePage';
import { PrivateRoute } from './router/PrivateRoute';
import { PublicRoute } from './router/PublicRoute';

export const App = () => {

  return (
    <Switch>

      <PublicRoute exact path="/login" isAuthenticated={false} component={AuthPage} />
      <PublicRoute exact path="/register" isAuthenticated={false} component={AuthPage} />

      <PrivateRoute exact path="/messages" isAuthenticated={true} component={MessagesPage} />
      <PrivateRoute exact path="/account/detail" isAuthenticated={true} component={Account} />
      <PrivateRoute exact path="/:id" isAuthenticated={true} component={Profile} />
      <PrivateRoute exact path="/" isAuthenticated={true} component={Index} />
      
      <Redirect to="/login" />

    </Switch>
  )
}
