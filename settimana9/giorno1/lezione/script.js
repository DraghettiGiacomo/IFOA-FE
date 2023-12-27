
/* ------------------------- CLASS ------------------------- */

const arrNumbers = [];

(function popolaArr(){
    for(let i = 0; i < 5; i++){
        arrNumbers.push(Math.floor(Math.random()*101))
    }
})();

console.log(arrNumbers);

class Valuta {
    constructor(arr = null){ //---->> in questo caso nel constructor abbiamo inserito un controllo sull'array che gli veniva passato. Inoltre abbiamo copiato, usando "this", l'array che arriva dentro un'altra variabile. 
        if(arr !== null){
            this.numbers = arr
        }
    }
    stampa(){
        this.numbers.forEach(element => { //------->> qui abbiamo richiamato la varibile creata prima con "this", perchè si riferisce al padre cioè all'oggetto "valuta" 
            if(element % 3 === 0 && element % 5 === 0){
                console.log('paperino');
            } else if (element % 5 === 0){
                console.log('pluto');
            } else if (element % 3 === 0) {
                console.log('pippo');
            } else {
                console.log(element);
            }
        });
    }
}

const test = new Valuta(arrNumbers);
if(test.hasOwnProperty('numbers')){
    test.stampa()
} else {
    console.log('Non ho i numeri');
}

/* ------------------------- CLASS ------------------------- */


/* ------------------------- ADDEVENTLISTENER ------------------------- */

document.getElementById('button').addEventListener('click', ciao())

function ciao(){ //----->>per evitare che la funzione venga eseguita prima del click del bottone bisogna dichiarare un return che ritorni una funzionedentro la quale esegui il codice che desideri
    return function(){
        console.log('ciao');
    }
}

/* ------------------------- ADDEVENTLISTENER ------------------------- */