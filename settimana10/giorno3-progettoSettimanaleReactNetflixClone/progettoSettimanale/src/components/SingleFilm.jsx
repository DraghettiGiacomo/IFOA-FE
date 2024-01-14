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
            <div key={film.film.imdbID} className="col mb-2 px-1" onClick={handleShow} style={{cursor: 'pointer'}}>
                <img className="img-fluid" src={film.film.Poster} alt="movie picture" style={{ minHeight: '190px', maxHeight: '190px' }} />
            </div>
            {/* <ModalInfoFilm show={show} onHide={handleClose}/> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-secondary text-black" closeButton>
                    <Modal.Title>{film.film.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary text-black">
                    Release date: {film.film.Year}
                </Modal.Body>
                <Modal.Footer className="bg-secondary text-black">
                    Code: {film.film.imdbID}
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default SingleFilm