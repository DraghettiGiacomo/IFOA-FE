import React, { useEffect, useState } from "react";
import SingleGalley from "./SingleGallery";
import Galley1 from "./Gallery1";
import Galley2 from "./Gallery2";
import Galley3 from "./Gallery3";

const DivPadreTvShow = (props) => {

    console.log(props);

    return (
        <>
            
            {props.arraySage.map((nome, index) => <div key={index}> <SingleGalley nome={nome}/> </div>)}
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