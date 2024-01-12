import React from 'react';
import LogoNetflix from '../assets/Logo.png'

function NavbarNetflix () {

  const stileNav = {
    marginTop: '50px'
  }

  return (
    <>
    <div className='container-fluid bg-dark' style={stileNav}>

      <nav
        className="container navbar navbar-expand-lg"
      >
        <a className="navbar-brand text-light"><img src={ LogoNetflix } style={{width: '100px'}} /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className=" text-light nav-link font-weight-bold"
                >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className=" text-light nav-link font-weight-bold">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className=" text-light nav-link font-weight-bold">Movies</a>
            </li>
            <li className="nav-item">
              <a className=" text-light nav-link font-weight-bold">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className=" text-light nav-link font-weight-bold">My List</a>
            </li>
          </ul>
          <div className='d-flex gap-3 align-items-center'>
            <i className="text-light fa fa-search icons"></i>
            <div className="text-light" id="kids">KIDS</div>
            <i className="text-light fa fa-bell icons"></i>
            <i className="fa fa-user icons text-light"></i>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default NavbarNetflix;