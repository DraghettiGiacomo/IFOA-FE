import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarNetflix from './components/NavbarNetflix'
import FooterNetflix from './components/FooterNetflix';
import MainNetflix from './components/MainNetflix'


function App() {

  return (
    <>
      <NavbarNetflix></NavbarNetflix>
      <MainNetflix style={{minHeight: '70vh'}} />
      <FooterNetflix></FooterNetflix>
    </>
  )
}

export default App
