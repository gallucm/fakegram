import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";

import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";

import { useLogin } from "./hooks/useLogin";

import { Account } from "./pages/AccountPage";
import { AuthPage } from "./pages/AuthPage";
import { Index } from "./pages/MainPage";
import { MessagesPage } from "./pages/MessagesPage";
import { Profile } from "./pages/ProfilePage";
import { Loading } from "./components/ui/loading/Loading";

export const App = () => {
  const [loadUse, checkIfLogged] = useLogin();
  const [load, setLoad] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!load) {
      setLoad(true);
      checkIfLogged();
    }
  }, [checkIfLogged, load]);

  if (loadUse) {
    return <Loading />;
  }

  return (
    <Switch>
      <PublicRoute exact path="/login" isAuthenticated={isLoggedIn && !loadUse} component={AuthPage} />
      <PublicRoute exact path="/register" isAuthenticated={isLoggedIn && !loadUse} component={AuthPage} />

      <PrivateRoute exact path="/messages" isAuthenticated={isLoggedIn && !loadUse} component={MessagesPage} />
      <PrivateRoute exact path="/account/edit/" isAuthenticated={isLoggedIn && !loadUse} component={Account} />
      <PrivateRoute exact path="/account/password/change/" isAuthenticated={isLoggedIn && !loadUse} component={Account} />
      <PrivateRoute exact path="/:id" isAuthenticated={isLoggedIn && !loadUse} component={Profile} />
      <PrivateRoute exact path="/" isAuthenticated={isLoggedIn && !loadUse} component={Index} /> 

       <Redirect to="/login" /> 
    </Switch>
  );
};
