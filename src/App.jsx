import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer"
import "98.css"
import Nav from "./components/UI/Nav";

const App = () => {
  return (
    <>
    {/* <Nav /> */}
    <div style={{height:"30px"}}></div>
    <div
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {/* <div style={{ width: 0 }}> */}
      <Outlet />
    {/* </div> */}
  </div>
  <div style={{height: "40px"}}></div>
  <Footer />
  </>
  );
};

export default App;
