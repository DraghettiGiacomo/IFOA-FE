import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SingleFilm = ({saga, film}) => {

    /* console.log(saga); */
    /* console.log(film); */

    const navigate = useNavigate()

    return (
        <>
            <div key={film.imdbID} className="col mb-2 px-1" 
            onClick={() => navigate('/details/'+ (saga) + '/' + (film.Title) + '/' + (film.imdbID))} 
            style={{cursor: 'pointer'}}>
                <img className="img-fluid" src={film.Poster} alt="movie picture" style={{ minHeight: '190px', maxHeight: '190px' }} />
            </div>
        </>
    )
}
export default SingleFilm