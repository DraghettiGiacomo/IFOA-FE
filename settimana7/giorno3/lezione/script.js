/* CHIAMATA ASINCRONE */



/* callbacks */


function asy(paperino){
    console.log('INIZIO operazione asincrona');
    setTimeout(()=>{
        console.log('operazione asicrona compiuta dopo 5 secondi');
        paperino()
    }, 5000)
    console.log('FINE operazione asincrona');
}

function paperino(){
    console.log('sono paperino');
}

asy(paperino)

/* ------------- */  //----->> in questo modo ho ricreato una funzione setTimeOut, perchè passo alla funzione asy1 due parametri che sono: una funzione e i millesecondi dopo quanto eseguire la funzione. Esattamente come il setTimeOut

function asy1(paperino, millisecond){
    console.log('inizio operazione asincrona 2');
    setTimeout(()=>{
        console.log('operazione asicrona 2 compiuta dopo 2 secondi');
        paperino()
    }, millisecond)
}

function paperino1(){
    console.log('sono paperino 2');
}

asy1(paperino, 2000)

/* ------------- */


/* promises */

function recuperaDati(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dati = {nome:'Mario', cognome:'Rossi'}
            const operazioneRiuscita = true

            if(operazioneRiuscita){
                resolve(dati)
            } else {
                reject('Errore')
            }
        }, 2000)
    })
}

recuperaDati()
.then((dati) => {console.log(dati);})
.catch((err) => {console.log(err);})



function primaOperazione(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('prima operazione riuscita');
            resolve(1)
        }, 2000)
    })
}
function secondaOperazione(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('seconda operazione riuscita', dato);
            resolve(dato + 1)
        }, 2000)
    })
}
function terzaOperazione(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('prima operazione riuscita', dato);
            resolve(dato + 1)
        }, 2000)
    })
}

primaOperazione()
.this((dato)=> {return secondaOperazione(dato)})
.this((dato)=> {return terzaOperazione(dato)})
.this((dato)=> {console.log('operazione completata',dato)})
.catch((err) => {console.log(err);})
