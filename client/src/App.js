import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import HomePage from "./components/pages/HomePage/HomePage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/profile" exact={true} component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
