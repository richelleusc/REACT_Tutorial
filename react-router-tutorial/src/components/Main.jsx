import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Roster from "./Roster";
import Schedule from "./Schedule";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </main>
  );
}

export default Main;
