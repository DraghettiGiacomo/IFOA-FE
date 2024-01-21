import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const DetailComponent = () => {

    const params = useParams()

    const sagaName = params.elementSaga
    console.log(sagaName);
    const filmName = params.elementName
    const filmId = params.elementId
    const filmPoster = params.elementPoster

    const URL = 'https://www.omdbapi.com/?apikey=a969db2c&s='

    const [getFilm, setGetFilm] = useState([])
    const [filmDetails, setFilmDetails] = useState([])

    const fetchData = async () => {
        try{
            const risposta = await fetch(URL + sagaName)
            if(risposta.ok){
                let data = await risposta.json()
                console.log(data.Search);
                setGetFilm(() => {
                    data.Search.forEach((film)=>{
                        if(film.imdbID === filmId){
                            console.log(film);
                            setFilmDetails(film)         
                        }
                    })
                });
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
        <>
            <div className="container text-light my-5">
                <div className="row">
                    <div className="col d-flex gap-5">
                        <img src={filmDetails.Poster} alt={"poster di" + (filmDetails.Title)} />
                        <div>
                            <h1>{filmDetails.Title}</h1>
                            <p className="display-6">{filmDetails.Year} - {filmDetails.Type}</p>
                            <hr />
                            <h4>A very short description:</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, itaque accusamus! Facere quam corporis asperiores? Corporis enim repellendus, architecto rerum saepe earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam sed ullam non excepturi accusantium velit repudiandae! Incidunt necessitatibus deleniti tempore. Qui!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailComponent