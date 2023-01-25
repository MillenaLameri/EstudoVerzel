import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../app/pages/home/Home";

import { ROUTES } from "./Routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.Login} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
