//import { useRoutes } from "react-router-dom";
import React, { Fragment } from "react";

import Header from "../Header";
import Routing from "../../routes/routing";
import Footer from "../Footer";

import "../../styles/main.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Routing />
      <Footer />
    </Fragment>
  );
}

export default App;
