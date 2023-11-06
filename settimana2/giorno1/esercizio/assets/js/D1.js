<<<<<<< HEAD
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
srtinga: insieme di parole
numero: numero semplice o decimale
booleani: sono in valori true / false
null: sono i valori sconosciuti
undefined: sono i valori non assegnati
data:
array
oggetto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Giacomo';
console.log(myName);
document.getElementById('myName').innerHTML += myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12;
let n2 = 20;
console.log(n1 + n2);

let n3 = 12;
let n4 = 20;
let somma = n3 + n4;
console.log(somma);
document.getElementById('somma').innerHTML += somma;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
let y;
y = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Draghetti';
console.log(myName);

/* const mySurname = 'Draghetti';
mySurname = 'Ridolfi';
console.log(mySurname);
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione); //------------>> si può fare anche così
 
console.log(4 - x);
document.getElementById('differenza').innerHTML += sottrazione;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);

const myExtra = (name1 === name2) ? 'sono uguali' : 'non sono uguali';
console.log(myExtra);

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
console.log(name1 === name2);

const extra = (name1 === name2) ? 'sono uguali' : 'non sono uguali';
console.log(extra);

document.getElementById('verifica1').innerHTML += myExtra;
document.getElementById('verifica2').innerHTML += extra;

//------ prof

let name3 = 'john';
let name4 = 'John';
let verifica = name3 === name4; //---->> consigliato perchè così ho già il dato memorizzato in una variabile che posso richiamare quando voglio
console.log(verifica);

let altraVerifica = name1.toLocaleLowerCase() === name2.toLowerCase();
console.log(altraVerifica);

=======
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
srtinga: insieme di parole
numero: numero semplice o decimale
booleani: sono in valori true / false
null: sono i valori sconosciuti
undefined: sono i valori non assegnati
data:
array
oggetto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Giacomo';
console.log(myName);
document.getElementById('myName').innerHTML += myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12;
let n2 = 20;
console.log(n1 + n2);

let n3 = 12;
let n4 = 20;
let somma = n3 + n4;
console.log(somma);
document.getElementById('somma').innerHTML += somma;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
let y;
y = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Draghetti';
console.log(myName);

/* const mySurname = 'Draghetti';
mySurname = 'Ridolfi';
console.log(mySurname);
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione); //------------>> si può fare anche così
 
console.log(4 - x);
document.getElementById('differenza').innerHTML += sottrazione;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);

const myExtra = (name1 === name2) ? 'sono uguali' : 'non sono uguali';
console.log(myExtra);

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
console.log(name1 === name2);

const extra = (name1 === name2) ? 'sono uguali' : 'non sono uguali';
console.log(extra);

document.getElementById('verifica1').innerHTML += myExtra;
document.getElementById('verifica2').innerHTML += extra;

//------ prof

let name3 = 'john';
let name4 = 'John';
let verifica = name3 === name4; //---->> consigliato perchè così ho già il dato memorizzato in una variabile che posso richiamare quando voglio
console.log(verifica);

let altraVerifica = name1.toLocaleLowerCase() === name2.toLowerCase();
console.log(altraVerifica);

>>>>>>> bbc085b90199f02e42861909e83893eef74a13ba
