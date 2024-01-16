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

    //prova per portare i dati al genitore
    const spostamentoSaga = (data) => {
        nomiSageDaCercare.unshift(data)
        console.log(nomiSageDaCercare); 
    }

    useEffect(() => {
        console.log('ciao');
    }, [nomiSageDaCercare])

    return (
        <>
            <HeroNetflix spostamentoSaga={spostamentoSaga} />
            <DivPadreTvShow arraySage={nomiSageDaCercare} />
        </>
    )
}

export default MainNetflix