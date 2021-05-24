import React from "react";
import { Route, Switch } from "react-router-dom";

import { SearchPage } from "./pages/SearchPage";
import { InfoPage } from "./pages/InfoPage";
import { ErrorPage } from "./pages/ErrorPage";

export const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/groceries/:id" component={InfoPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};
