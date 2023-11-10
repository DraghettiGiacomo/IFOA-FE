const oggetto = {
    nome: 'Giacomo',
    cognome: 'Draghetti',
    eta: 56
}

const oggetto2 = {
    ...oggetto,
    altezza: 175,
    occhi: 'marroni',
}

console.log(oggetto);
console.log(oggetto2);

const nomiCitta = {
    Napoli: 20,
    Bologna: 21,
    Roma: 56,
    Ancona: 26,
    Milano: 45,
    Torino: 45,
}

//for destrutturante //---->> permette di mostrare le chiavi di un oggetto, utile soprattutto se ci arriva un oggetto che non possiamo vedere

for (let key in oggetto){
    document.getElementById('chiavi').innerHTML += `<li>${key}</li>`;
}
for (let key in nomiCitta){
    document.getElementById('citta').innerHTML += `<option value="key">${key}</option>`;
}

function somma (...num){
    return num.reduce((accum, elemento) => accum + elemento, 0)
}

const x = somma(20, 30, 40, 50)

console.log(x);


// Spread operator --->> quando i tre puntini non sono dei parametri di una funzione si chiama spread operator

function lista (...nomi) {
    for(let i = 0; i < nomi.length; i++){
        document.getElementById('lista').innerHTML += `<li>${nomi[i]}</li>`
    }
}
lista('Marco', 'Giacomo', 'Stefano', 'Alex', 'Paolo', 'Grazia')

// Rest operator --->> quando i tre puntini sono dei parametri di una funzione si chiama rest operator

function somma(...parametri){
    let risultato = 0;
    for (let i = 0; i < parametri.length; i++){
        risultato += parametri[i]
    }    
    return risultato
}
console.log(somma(1, 2, 4, 5, 7, 56));

// Operatore di destrutturzione

const persona = {
    nome: 'Giacomo',
    cognome: 'Draghetti',
    eta: 21,
    corsi: ['HTML', 'CSS', 'JS']
}
const {nome, cognome, eta, corsi} = persona //--->> con un oggetto
console.log(corsi[1]);

const coordinate = [40.123, 12.214]
const [latitudine, longitudine] = coordinate //--->> con un array
//const [pippo, pluto] = coordinate //--->> agli array posso dare nomi diversi perchè hanno gli indici mantre gli oggetti hanno le chiavi
console.log(latitudine);

// Metodi degli array

const mioarray = ['Marco', 'Giacomo', 'Stefano', 'Alex', 'Paolo', 'Grazia']
console.log(mioarray);
console.log(mioarray.pop()); // pop() -->> estrae e restituisce l'elemento estratto
//shif() contrario di pop()
//unShif() contrario di push()

const mioarraySplice = ['Giovanni', 'Martina', 'Alice', 'Chiara', 'Daniele', 'Giuseppe']

mioarraySplice.splice(2, 1, 'Gianni', 'Antonio');
console.log(mioarraySplice);

const disney  = ['Papaerino', 'Pippo', 'Paperone', 'Pluto', 'Gastone', 'Archimede'];
console.log(disney);
const preferiti = disney.slice(1, 4) //--->> estrae elementi da un array senza modificare l'originale
console.log(preferiti);

// Iterazione degli array (ForEach - Map)

const numeri = [2, 4, 6, 8, 10];

numeri.forEach(function(el){ //--->> il forEach() non crea un nuovo array, si limita ad eseguire la stessa funzione per ogni elemento dell'array
    console.log(el*3);
});

const arrSomma = numeri.map (function(el){ //--->> il map() crea un nuovo array, aplicando a ogni elemento dell'array  la funzione indicata. Generalmente ha un return
    return el + 5;
})
console.log(arrSomma);

