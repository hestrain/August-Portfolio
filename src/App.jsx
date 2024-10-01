import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Nav from './components/UI/Nav';
import './App.css'
import React from 'react'


// 1. import `ChakraProvider` component


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
