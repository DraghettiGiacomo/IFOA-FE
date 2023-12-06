const studente = "Mario Rossi";


localStorage.setItem('studentelocal', studente);
sessionStorage.setItem('studentesession', studente);


console.log(localStorage.getItem('studentelocal'));
console.log(sessionStorage.getItem('studentesession'));

localStorage.removeItem('studentelocal')
sessionStorage.removeItem('studentesession')



const studente1 = {
    "nomne":"Mario",
    "cognome":"Rossi",
    "eta": 25,
    "hobbies":["calcio", "pallavolo", "bascket"]
};

//sessionStorage.setItem('studente1', studente1) //----->> se metto solo questo nelle application mi comparirà il typeof di ciò che gli passo 

const studenteJSON = JSON.stringify(studente1)  //----->> così facendo mi stamperà una stringa tutta su un'unica riga
console.log(studenteJSON);
sessionStorage.setItem('studente1', studenteJSON)

/* const studenteRtrive = sessionStorage.getItem('studente1') //----->> così facendo mi stamperà un oggetto
const studentePARSE = JSON.parse(studenteRtrive) */ 
const studentePARSE = JSON.parse(sessionStorage.getItem('studente1')) //----->> questa soluzione è più veloce e più concisa
console.log(studentePARSE);


/* -------------------------------- FARE UNA CHIAMATA IN XMLHTTPREQUEST -------------------------------- */
/* let dataCall = XMLHttpRequest();
dataCall.onload = function () {
    console.log(dataCall.response);
}
dataCall.open('GET', 'url nella quale voglio che vengano inseriti i dati');
dataCall.send(); */
/* -------------------------------- FARE UNA CHIAMATA IN XMLHTTPREQUEST -------------------------------- */

/* -------------------------------- FARE UNA CHIAMATA IN FETCH -------------------------------- */
//fetch('URL del database') //------>> ricevo i dati dal server, dopodichè compie tutte le azioni che gi scriviamo sotto
   // .then(response => response.json()) //----->> appena ricevi i dati dal server li converti in json()
   // .then(data => console.log(data)) 

fetch('https://swapi.dev/api/people')
.then(response => response.json())
.then(data => console.log(data))
    
/* -------------------------------- FARE UNA CHIAMATA IN FETCH -------------------------------- */

