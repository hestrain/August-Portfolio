import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer"
import "98.css"

const App = () => {
  return (
    <>
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
  <Footer />
  </>
  );
};

export default App;
