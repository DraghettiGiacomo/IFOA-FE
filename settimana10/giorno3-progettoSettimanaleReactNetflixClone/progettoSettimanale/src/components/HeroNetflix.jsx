import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const HeroNetflix = ( addNewSagaTitle) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    /* let TextAreaSagaFilmDaAggiungere = document.getElementById('TextAreaSagaFilmDaAggiungere')

    let ProvaRecuperoDatiDaTextArea = () => {
        console.log(TextAreaSagaFilmDaAggiungere.value);
    } */

    /* const prova = () => {
        props.addNewSagaTitle(document.getElementById('TextAreaSagaFilmDaAggiungere').value)
    } */

    return (
        <>
            <div>
                <div className="container d-flex justify-content-between align-items-center my-3">
                    <div className="d-flex gap-3 align-items-center">
                        <h2 className="m-0 p-0">TV Shows</h2>
                        <div className="dropdown ml-4 mt-0">
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
                    <div className="d-flex align-items-center">
                        {/* <button onClick={handleShow} className="btn btn-secondary btn-sm rounded-0" type="button" id="dropdownMenuButton" style={{ backgroundColor: '#221f1f' }}>Aggiungi saga televisiva &nbsp;</button> */}
                        <i className="fa fa-th-large icons"></i>
                        <i className="fa fa-th icons"></i>
                    </div>
                </div>
            </div>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-light" closeButton>
                    <Modal.Title>Aggiungi una saga televisiva</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Digita il nome della saga da inserire</Form.Label>
                            <Form.Control id="TextAreaSagaFilmDaAggiungere" className="bg-dark text-light" as="textarea" rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="bg-dark text-light">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light"  onClick={prova}>
                        Search Saga
                    </Button>
                </Modal.Footer>
            </Modal> */}

        </>
    );
}

export default HeroNetflix