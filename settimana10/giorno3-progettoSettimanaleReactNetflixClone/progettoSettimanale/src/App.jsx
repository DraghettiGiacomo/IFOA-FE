import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import DetailComponent from './pages/DetailComponent'
import NavbarNetflix from "./components/NavbarNetflix"
import FooterNetflix from "./components/FooterNetflix"

function App() {

  /* /:elementPoster */

  return (
    <>
      <NavbarNetflix></NavbarNetflix>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:elementSaga/:elementName/:elementId' element={<DetailComponent />}/>
          <Route path='/*' element={<NotFound title='Torna nella Home coglione'/>}/>
        </Routes>
      </BrowserRouter>
      <FooterNetflix></FooterNetflix>
    </>
  )
}

export default App
