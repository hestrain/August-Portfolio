import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer"
import "98.css"
import Nav from './components/UI/Nav';

const App = () => {
  return (
    <>
    <Nav />
      <Outlet />
  <Footer />
  </>
  );
};

export default App;
