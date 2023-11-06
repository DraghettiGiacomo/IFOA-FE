/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log('Esercizio 1');
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('Esercizio 2');
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('Esercizio 3');
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.splice(0, 1)

pets.push('redfish')

console.log('Esercizio 4');
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]



//for (let i = 0; i < cars.length; i++) {}

for (let i = 0; i < cars.length; i++) {

  let licensePlate = 'DG' + Math.floor(Math.random() * 100) + 'DG';

  cars[i].licensePlate = licensePlate;
}

console.log('Esercizio 5');
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({ brand: 'Fiat', model: 'Panda', color: 'grey', trims: ['deadh', 'trash', 'l-line'], }) //------>> così si inseriscono dei nuovi oggetti inn un array che contine oggetti



for (let i = 0; i < cars.length; i++) {

  cars[i].trims.pop()

}

console.log('Esercizio 6');
console.log(cars[0].trims);
console.log(cars[1].trims);
console.log(cars[2].trims);
console.log(cars[3].trims);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {

  justTrims.push(cars[i].trims[0])

}

console.log('Esercizio 7');
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('Esercizio 8');
console.log(cars[0].color);
console.log(cars[1].color);
console.log(cars[2].color);
console.log(cars[3].color);

for (let i = 0; i < cars.length; i++) {

  if (cars[i].color.indexOf('b') === 0) {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }

}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log('Esercizio 9');

for (let i = 0; i < numericArray.length; i++) {

  while (numericArray[i] < 32) {

    console.log(numericArray[i]);

    i++

  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd', 'j', 's', 'b']

const posizioniCarattere = []

for(let i = 0; i < charactersArray.length; i++){

  const char = charactersArray[i]
  
  switch (char) {

    case 'a':
      posizioniCarattere.push(1);
      break
  
    case 'b':
      posizioniCarattere.push(2);
      break
  
    case 'c':
      posizioniCarattere.push(3);
      break
  
    case 'd':
      posizioniCarattere.push(4);
      break
  
    case 'e':
      posizioniCarattere.push(5);
      break
  
    case 'f':
      posizioniCarattere.push(6);
      break
  
    case 'g':
      posizioniCarattere.push(7);
      break
  
    case 'h':
      posizioniCarattere.push(8);
      break
  
    case 'i':
      posizioniCarattere.push(9);
      break
  
    case 'l':
      posizioniCarattere.push(10);
      break
  
    case 'm':
      posizioniCarattere.push(11);
      break
  
    case 'n':
      posizioniCarattere.push(12);
      break
  
    case 'o':
      posizioniCarattere.push(13);
      break
  
    case 'p':
      posizioniCarattere.push(14);
      break
  
    case 'q':
      posizioniCarattere.push(15);
      break
  
    case 'r':
      posizioniCarattere.push(16);
      break
  
    case 's':
      posizioniCarattere.push(17);
      break
  
    case 't':
      posizioniCarattere.push(18);
      break
  
    case 'u':
      posizioniCarattere.push(19);
      break
  
    case 'v':
      posizioniCarattere.push(20);
      break
  
    case 'z':
      posizioniCarattere.push(21);
      break
    
    default:
      posizioniCarattere.push(null);
  
  }
}

console.log('Esercizio 10');
console.log(posizioniCarattere);

