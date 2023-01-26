import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../app/pages/home/Home";
import { Login } from "../app/pages/login/Login";

import { ROUTES } from "./Routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.Home} component={Home} />
        <Route exact path={ROUTES.Login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
