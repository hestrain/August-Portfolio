import React from 'react';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import { Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <NavTabs />
    <Outlet />
    <Footer />
    </>
  )
}

export default App