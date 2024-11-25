import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ListingsPage from "../pages/ListingsPage";
import ListingDetailPage from "../pages/ListingDetailPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/listings" component={ListingsPage} />
        <Route path="/listings/:id" component={ListingDetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
