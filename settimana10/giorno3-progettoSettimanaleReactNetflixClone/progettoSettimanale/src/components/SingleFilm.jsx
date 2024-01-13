import React from "react";

const SingleFilm = (film) => {

    /* console.log(film.film); */

    return(
        <div key={film.film.imdbID} className="col mb-2 px-1">
            <img className="img-fluid" src={film.film.Poster} alt="movie picture"/>
        </div>
    )
}
export default SingleFilm