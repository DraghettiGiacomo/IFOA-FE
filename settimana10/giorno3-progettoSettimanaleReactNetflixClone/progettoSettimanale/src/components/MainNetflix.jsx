import React from 'react';
import HeroNetflix from './HeroNetflix';
import DivPadreTvShow from './DivPadreTvShow';
import { useEffect, useState } from 'react';

const MainNetflix = () => {

    const [nomiSageDaCercare, setnomiSageDaCercare] = useState([
        'Harry Potter', 
        'Star wars', 
        'Avengers', 
        'The lord of the rings',
        'Hobbit'
    ])
    
    /* const nomiSageDaCercare = [
        'Harry Potter', 
        'Star wars', 
        'The lord of the rings',
        'Hobbit'
    ]; */

    //prova per portare i dati al genitore
    /* const spostamentoSaga = (data) => {
        setnomiSageDaCercare(nomiSageDaCercare.unshift(data))
        console.log(nomiSageDaCercare); 
    }

    useEffect(() => {
        console.log('ciao');
    }, [nomiSageDaCercare]) */ 

    return (
        <>
            <HeroNetflix /* spostamentoSaga={spostamentoSaga} */ />
            <DivPadreTvShow arraySage={nomiSageDaCercare} />
        </>
    )
}

export default MainNetflix