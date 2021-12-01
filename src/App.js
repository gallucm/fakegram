import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import { Account } from './pages/AccountPage';
import { AuthPage } from './pages/AuthPage';
import { Index } from './pages/MainPage';
import { MessagesPage } from './pages/MessagesPage';
import { Profile } from './pages/ProfilePage';
import { PrivateRoute } from './router/PrivateRoute';
import { PublicRoute } from './router/PublicRoute';

export const App = () => {
   
  const { isLoggedIn } = useSelector(state => state.auth);
  
  return (
    <Switch>
      <PublicRoute exact path="/login" isAuthenticated={isLoggedIn} component={AuthPage} />
      <PublicRoute exact path="/register" isAuthenticated={isLoggedIn} component={AuthPage} />

      <PrivateRoute exact path="/messages" isAuthenticated={isLoggedIn} component={MessagesPage} />
      <PrivateRoute exact path="/account/detail" isAuthenticated={isLoggedIn} component={Account} />
      <PrivateRoute exact path="/profile/:id" isAuthenticated={isLoggedIn} component={Profile} />
      <PrivateRoute exact path="/" isAuthenticated={isLoggedIn} component={Index} />
      
      <Redirect to="/login" />

    </Switch>
  )
}
