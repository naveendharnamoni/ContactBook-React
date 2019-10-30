import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./containers/MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header></Header>
        <MainContent></MainContent>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
