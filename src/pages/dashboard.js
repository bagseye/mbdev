import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Agency from "../templates/agency-template";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/dashboard/perfect-manors" component={Agency} />
      <PrivateRoute path="/dashboard/profile" component={Profile} />
      <PrivateRoute path="/dashboard" />
      <Login path="/dashboard/login" />
    </Router>
  </Layout>
);

export default App;
