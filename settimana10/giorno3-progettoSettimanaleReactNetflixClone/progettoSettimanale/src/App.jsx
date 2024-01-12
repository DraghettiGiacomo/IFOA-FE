import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarNetflix from './components/NavbarNetflix'
import FooterNetflix from './components/FooterNetflix';
/* import NavbarMy from '../components/NavbarNetflix'; */


function App() {

  return (
    <>
      <NavbarNetflix></NavbarNetflix>
      <FooterNetflix></FooterNetflix>
    </>
  )
}

export default App
