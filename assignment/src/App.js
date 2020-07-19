import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInSide from "../src/components/login/SignInSide";
import Dashboard from "../src/components/dashboard";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={SignInSide}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
