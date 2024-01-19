import { useEffect, useState } from "react"


const Search = (newName) => {

    const [citta, setCitta] = useState([])

    useEffect(() => {
        
        console.log(citta);
        props.newName(citta)
        
    }, [citta])

    return (
        <div id='inputCity' className="container">
            <div id="searchBar" className="d-flex justify-content-center">
                <input type='text' id='inputCitta' placeholder='Scrivi il nome di una città' value={citta} onChange={(e) => setCitta(e.target.value)}></input>
                <i onClick={() => nuovaCity()} className="bi bi-search"></i>
            </div>
        </div>
    )
}

export default Search