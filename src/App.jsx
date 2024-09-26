import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Nav from './components/UI/Nav';
import './App.css'

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
