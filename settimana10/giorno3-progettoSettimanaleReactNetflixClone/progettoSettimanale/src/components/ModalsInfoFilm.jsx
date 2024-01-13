import React from "react";
import Modal from 'react-bootstrap/Modal';
import ModalFooter from "react-bootstrap/esm/ModalFooter";

const ModalInfoFilm = () => {
    
    return(
        <>
        <Modal>
            <Modal.Header className="bg-dark text-light"  closeButton>
                <Modal.Title>{film.film.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light" >
                {film.film.Year}
            </Modal.Body>
            <ModalFooter className="bg-dark text-light" >
                {film.film.imdbID}
            </ModalFooter>
        </Modal>
        </>
    )
}
export default ModalInfoFilm