import React from 'react';
import HeroNetflix from './HeroNetflix';
import DivPadreTvShow from './DivPadreTvShow';
import { useEffect } from 'react';

const MainNetflix = () => {

    
    const nomiSageDaCercare = [
        'Harry Potter', 
        'Star wars', 
        'The lord of the rings',
        'Hobbit'
    ];

    // PROVA PER AGGIUNGERE DINAMICAMENTE UNA NUOVA SAGA ALLA PAGINA
    /* let sagaRicevuta
    
    const spostamentoSgaRicevuta = (data) => {
        console.log(data);
        sagaRicevuta = data
        console.log(sagaRicevuta);
    }

    useEffect(() => {
        nomiSageDaCercare.unshift(sagaRicevuta)
    }, [sagaRicevuta]) */

    return (
        <>
            <HeroNetflix /* addNewSagaTitle={spostamentoSgaRicevuta} */ />
            <DivPadreTvShow arrySage={nomiSageDaCercare} />
        </>
    )
}

export default MainNetflix