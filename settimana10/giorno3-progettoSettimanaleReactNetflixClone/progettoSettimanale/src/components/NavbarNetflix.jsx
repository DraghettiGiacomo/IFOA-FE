import React from 'react';
import LogoNetflix from '../assets/Logo.png'
import ImgAvatar from '../assets/avatar.png'
import IconKidsFilm from '../assets/kids_icon.png'

function NavbarNetflix () {

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
            <div className="dropdown ml-4 mt-0">
                            {/* <button
                                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{ backgroundColor: '#221f1f' }}
                            >
                                Genres &nbsp;
                            </button> */}
                            <img src={ ImgAvatar } alt="logo netflix" height="30px" width="30px" /* className='dropdown-toggle'  id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  *//>
                            <div className="dropdown-menu bg-dark rounded-0" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                                <a className="dropdown-item text-white bg-dark" href="#">Thriller</a>
                            </div>
                        </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default NavbarNetflix;