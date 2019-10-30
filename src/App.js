import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./containers/MainContent/MainContent";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MainContent></MainContent>
    </Fragment>
  );
}

export default App;
