import React from 'react';
import LogoNetflix from '../assets/Logo.png'
import ImgAvatar from '../assets/avatar.png'
import IconKidsFilm from '../assets/kids_icon.png' 

function NavbarNetflix () {

  const stileNav = {
    marginTop: '50px'
  }

  return (
    <>
    <div className='container-fluid'>

      <nav className="container navbar navbar-expand-lg">
        <a className="navbar-brand text-light"><img src={ LogoNetflix } style={{width: '100px'}} /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold">My List</a>
            </li>
          </ul>
          <div className='d-flex gap-3 align-items-center'>
            <i className="fa fa-search icons"></i>
            <img src={ IconKidsFilm } alt="logo netflix" height="30px" width="30px" />
            <i className="fa fa-bell icons"></i>
            <img src={ ImgAvatar } alt="logo netflix" height="30px" width="30px" />
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default NavbarNetflix;