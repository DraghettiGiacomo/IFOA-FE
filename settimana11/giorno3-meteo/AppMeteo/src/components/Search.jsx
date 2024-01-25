import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Search = ({newName}) => {

    let navigate = useNavigate()

    const [citta, setCitta] = useState([])

    const nuovaCity = () => {
        console.log(citta);
        newName(citta)
    }

    /* useEffect(() => {
        
        console.log(citta);
        newName(citta)
        
    }, [citta]) */

    return (
        <div id="containerSearchBar" className="container d-flex align-items-center mt-4">
            <div id='inputCity' className="container">
                <div id="searchBar" className="d-flex justify-content-center gap-3">
                    <input type='text' id='inputCitta' placeholder='Scrivi il nome di una città' value={citta} onChange={(e) => setCitta(e.target.value)}></input>
                    <i onClick={() => nuovaCity()} className="bi bi-search"></i>
                </div>
            </div>
        </div>
    )
}

export default Search