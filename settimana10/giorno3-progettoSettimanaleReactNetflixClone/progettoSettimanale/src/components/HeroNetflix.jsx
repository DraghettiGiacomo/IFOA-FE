import React from "react";

const HeroNetflix = () => {
    return (
        <>
            <div>
                <div className="container d-flex justify-content-between my-3">
                    <div className="d-flex gap-3 align-items-center">
                        <h2 className="">TV Shows</h2>
                        <div className="dropdown ml-4 mt-1">
                            <button
                                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{ backgroundColor: '#221f1f' }}
                            >
                                Genres &nbsp;
                            </button>
                            <div
                                className="dropdown-menu bg-dark rounded-0"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                                <a className="dropdown-item text-white bg-dark" href="#">Thriller</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <i className="fa fa-th-large icons"></i>
                        <i className="fa fa-th icons"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroNetflix