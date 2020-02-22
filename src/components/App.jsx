import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Test } from "./pages";
import Login from "./LoginOrSignup/Login";
import Header from "./Common/header";
import Signup from "./LoginOrSignup/Signup";
import ErrorPage from "./pages/ErrorPage";
import RegisterBook from "./Register/RegisterBook/RegisterBook";
import SelectBookgenre from "./Register/SelectCategory/SelectBookgenre";
import SelectRentalperiod from "./Register/SelectRentalperiod/SelectRentalperiod";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/login" component={Login} />
      <Route path="/header" component={Header} />
      <Route path="/signup" component={Signup} />
      <Route path="/registerBook" component={RegisterBook} />
      <Route path="/selectbookgenre" component={SelectBookgenre} />
      <Route path="/rentalInfo" component={SelectRentalperiod} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
