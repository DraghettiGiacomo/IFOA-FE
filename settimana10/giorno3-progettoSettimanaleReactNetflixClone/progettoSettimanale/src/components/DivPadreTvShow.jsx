import React, { useState } from "react";
import SingleGalley from "./SingleGallery";
import Galley1 from "./Gallery1";
import Galley2 from "./Gallery2";
import Galley3 from "./Gallery3";

const DivPadreTvShow = () => {

    const nomiSageDaCercare = [
        'Harry Potter', 
        'Star wars', 
        'The lord of the rings',
        'One Piece'
    ];

    /* const nomiSageDaCercare1 = {
        saga1: 'Harry Potter',
        saga2: 'The lord of the rings',
        saga3: 'Star wars'
    } */

    return (
        <>
            <div>
                {nomiSageDaCercare.map((nome) => <SingleGalley nome={nome} />)}
            </div>
            {/* <SingleGalley nome={nomiSageDaCercare} /> */}
            {/* <div>
                <Galley1 nome={nomiSageDaCercare1.saga1}/>
                <Galley2 nome={nomiSageDaCercare1.saga2}/>
                <Galley3 nome={nomiSageDaCercare1.saga3}/>
            </div> */}
        </>
    );
}

export default DivPadreTvShow