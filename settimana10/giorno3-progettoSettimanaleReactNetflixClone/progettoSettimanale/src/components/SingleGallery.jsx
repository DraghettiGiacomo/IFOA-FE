import React from "react";
import { useState, useEffect } from "react";
import SingleFilm from "./SingleFilm";

const SingleGalley = (nome) => {

    console.log(nome.nome); //Il problema è che 'nome.nome' è composto da più nomi di serie

    const URL = 'https://www.omdbapi.com/?apikey=a969db2c&s='

    const [galleria, setGallery] = useState([])

    const fetchData = async () => {
        try{
            const risposta = await fetch(URL + (nome.nome))
            if(risposta.ok){
                let data = await risposta.json()
                /* console.log(data); */
                setGallery(data.Search)
            } else {
                console.log('errore nella risposta fetch');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => { 
        fetchData()
    }, [])

    return(
        <div className="container">
            <h4>{nome.nome}</h4>
            <div className="row mb-4 no-gutters text-center">
                {galleria.map((film, index) => <SingleFilm key={index} saga={nome.nome} film={film}/>)}
            </div>
        </div> 
    )
}
export default SingleGalley