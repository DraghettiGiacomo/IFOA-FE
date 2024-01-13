import React from "react";
import ModalInfoFilm from "./ModalsInfoFilm";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const SingleFilm = (film) => {

    /* console.log(film.film); */

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <>
            <div key={film.film.imdbID} className="col mb-2 px-1" onClick={handleShow}>
                <img className="img-fluid" src={film.film.Poster} alt="movie picture" style={{ minHeight: '190px' }} />
            </div>
            {/* <ModalInfoFilm show={show} onHide={handleClose}/> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-light" closeButton>
                    <Modal.Title>{film.film.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">
                    Release date: {film.film.Year}
                </Modal.Body>
                <Modal.Footer className="bg-dark text-light">
                    Code: {film.film.imdbID}
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default SingleFilm