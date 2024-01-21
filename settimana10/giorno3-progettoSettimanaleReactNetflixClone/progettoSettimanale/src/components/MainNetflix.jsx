import React from 'react';
import HeroNetflix from './HeroNetflix';
import DivPadreTvShow from './DivPadreTvShow';
import { useEffect, useState } from 'react';

const MainNetflix = () => {

    const [nomiSageDaCercare, setnomiSageDaCercare] = useState([ 
        'Shrek', 
        'Star wars', 
        'The lord of the rings',
        'Hobbit',
        'Naruto',
        'One PIece',
        'Avengers',
        'The Crown',
        'Jaws',
        'Terminator',
        'Star Trek',
        'American Pie',
        'Madagascar',
        'Friends',
        '007',
        'Mission Impossible',
        'Sherlock Holmes',
        'Spider-Man'
    ]) 

    const daCercare = []

    const cambio = () => {     
        
        for(let i = 0; i < 3; i++){
            
            let numCasual = Math.floor(Math.random() * nomiSageDaCercare.length)

            daCercare.push(nomiSageDaCercare[numCasual])
            console.log(daCercare);
        }
    }
    cambio()
    
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
    } */
    
    /* useEffect(() => {
            console.log('ciao');
            let nuovo = nomiSageDaCercare
            console.log(nuovo);
    }, [nomiSageDaCercare])  */

    return (
        <>
            <HeroNetflix /* spostamentoSaga={spostamentoSaga} */ />
            <DivPadreTvShow nomiSageDaCercare={daCercare} />
        </>
    )
}

export default MainNetflix