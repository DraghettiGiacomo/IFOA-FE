/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 235;
let b = 2478;

if(a < b){
  document.getElementById('es1').innerHTML += 'è più grande b';
} else if (a > b){
  document.getElementById('es1').innerHTML += 'è più grande a';
} else {
  document.getElementById('es1').innerHTML += 'a e b sono uguali';
};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let c = 5;
//operatore ternario
const uguaglianza = (c === 5) ? "equal" : "not equal";
document.getElementById('es2').innerHTML = uguaglianza;
//operatore if
if (c !== 5){
  console.log('not equal');
} else {
  console.log('equal')
};

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let d = 23542;

const divisibile = ( (d%5) === 0 ) ? "divisibile per 5" : "non divisibile per 5";
document.getElementById('es3').innerHTML = divisibile;

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let primonumero = 2346428;
let secondonumero = 690;

if(primonumero === 8 || secondonumero === 8 || (primonumero + secondonumero) === 8 || (primonumero - secondonumero) === 8 ){
  document.getElementById('es4').innerHTML = 'il valore di uno di essi è 8 o la loro addizione/sottrazione è uguale a 8.';
} else {
  document.getElementById('es4').innerHTML = 'il valore di uno di essi non è 8 o la loro addizione/sottrazione non è uguale a 8.';
};

const somiglianza = (primonumero === 8 || secondonumero === 8 || (primonumero + secondonumero) === 8 || (primonumero - secondonumero) === 8 ) ? "il valore di uno di essi è 8 o la loro addizione/sottrazione è uguale a 8." : "il valore di uno di essi non è 8 o la loro addizione/sottrazione non è uguale a 8.";
document.getElementById('es4Bis').innerHTML = somiglianza;


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 100;

if(totalShoppingCart > 50){
  document.getElementById('es5').innerHTML = 'hai diritto alla spedizione gratuita' + '<br>' + totalShoppingCart;
} else {
  
  totalShoppingCart = totalShoppingCart + 10;
  
  document.getElementById('es5').innerHTML = 'la spedizione ha un supplemento di 10' + '<br>' + totalShoppingCart;
};

//---prof    ----->> meglio questo metodo perchè nell'altro dovrei cambiare l'if nel caso aumetno il costo di spedizione

let totalShoppingCart1 = 45;
let spedizione = 10;
let totale = totalShoppingCart1;

if (totalShoppingCart1 < 50){
  totale += spedizione
}

document.getElementById('es5prof').innerHTML = 'Costo totale: €' + totale;

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var sconto = totalShoppingCart - ((totalShoppingCart*20)/100);

if( sconto > 50 ){
  document.getElementById('es6').innerHTML = 'hai diritto alla spedizione gratuita' + '<br>' + totalShoppingCart;
} else {
  
  sconto = sconto + 10;
  
  document.getElementById('es6').innerHTML = 'la spedizione ha un supplemento di 10' + '<br>' + totalShoppingCart;
};

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let valori = [ // -------->> HO SBAGLIATO PERCHè DOVEVO FARE TRE VARIABILI DIVERSE
  8654,
  543,
  132,
]

console.log(valori.sort());
document.getElementById('es7').innerHTML = "L'ordine corretto è il seguente"  + ' ' + valori.sort();

// -----prof ------>>GIUSTO!!!!!
let x1 = 6;
let x2 = 14;
let x3 = 10;

if (x1 >= x2){
  if (x3 >= x1){
    console.log(x3, x1, x2)
  } else {
    if (x3 >= x2){
      console.log(x1, x3, x2);
    }else {
      console.log(x1, x2, x3);
    }
  }
} else {
  if (x3 >= x2){
    console.log(x3, x2, x1);
  } else {
    if (x3 >= x1){
      console.log(x2, x3, x1);
    } else {
      console.log(x2, x1, x3);
    }
  }
}

let arrayOrd = [x1, x2, x3]; //------>> così va bene perchè nell'array ci sono delle variabili
/* arrayOrd = x1;
arrayOrd = x2;
arrayOrd = x3; */
arrayOrd.sort()
console.log(arrayOrd);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valoreFornito = 2354;

if(typeof valoreFornito === 'number'){
  document.getElementById('es8').innerHTML = 'è un numero';
} else {
  document.getElementById('es8').innerHTML = 'non è un numero';
};

const eNumero = (typeof(valoreFornito) === 'number') ? 'è un numero' : 'non è un numero';
document.getElementById('es8Bis').innerHTML = eNumero;

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroFornito = 12;
let controllo = (numeroFornito%2);

if(controllo === 0){
  document.getElementById('es9').innerHTML = 'pari';
} else {
  document.getElementById('es9').innerHTML = 'dispari';
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    document.getElementById('es10').innerHTML = 'Meno di 5';
  } else if (val < 10) {
    document.getElementById('es10').innerHTML = 'Meno di 10';
  } else {
    document.getElementById('es10').innerHTML = 'Uguale a 10 o maggiore';
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me.lastName);
console.log(me);

/* ESERCIZIO 13 
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log( me.skills[2]);
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array = [];

array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;

/* array.push(1,2,3,4,5,6,7,8,9,10) */ //------>> metodo .push() per inserire valori dentro gli array

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100;
console.log(array);
