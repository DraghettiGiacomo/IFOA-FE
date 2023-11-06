<<<<<<< HEAD

//--------OGGETTO---------

const myOggetto = {
    // nomeValore1: valore,
    name: 'Giacomo',
    surname: 'Draghetti',
    age: 20,
    hasWebcam: true,
};

console.log(myOggetto.name); //----------->> meglio usare questo metodo per richiamrare un valore dentro un oggettto
console.log(myOggetto['surname']);
document.getElementById('oggetto').innerHTML = myOggetto.name;

myOggetto.email = 'jack.draghetti2002@gmail.com';
document.getElementById('oggetto').innerHTML += '<br>' + myOggetto.email;
console.log(myOggetto.email);

delete myOggetto.email
document.getElementById('oggetto').innerHTML += '<br>' + myOggetto.email;
console.log(myOggetto.email);

const myOggetto2 = myOggetto
myOggetto2.name = 'Giovanni'
console.log(myOggetto.name);


//---prof

const oggetto = {
    name: 'Dario',
    surname: 'Del Giudice',
    age: 56,
    docente: true,
};

document.getElementById('name').innerHTML = oggetto.name;
document.getElementById('surname').innerHTML = oggetto.surname;
document.getElementById('age').innerHTML = oggetto.age;
document.getElementById('docente').innerHTML = oggetto.docente;

oggetto.email = 'nome@gmail.com';
document.getElementById('email').innerHTML += oggetto.email;

delete oggetto.email
document.getElementById('delete').innerHTML += oggetto.email;

const newOggetto = oggetto;
newOggetto.name = 'Pippo';
document.getElementById('primo').innerHTML += oggetto.name;
document.getElementById('secondo').innerHTML += newOggetto.name;

const altroOggetto = Object.assign({}, oggetto);
altroOggetto.name = 'Paperino';
document.getElementById('precedente').innerHTML += oggetto.name;
document.getElementById('new').innerHTML += altroOggetto.name;

const altroOggetto1 = {...oggetto};
altroOggetto1.name = 'Pluto';
document.getElementById('vecchio').innerHTML += oggetto.name;
document.getElementById('giovane').innerHTML += altroOggetto1.name;


//---prof



//--------ARRAY---------

const myArray = [
    'gatto',
    'cane',
    'coniglio', 
];
document.getElementById('array').innerHTML = myArray;
console.log(myArray[0]);

document.getElementById('primaVoce').innerHTML = myArray[0];
document.getElementById('secondaVoce').innerHTML = myArray[1];
document.getElementById('terzaVoce').innerHTML = myArray[2];

myArray.sort(); //------>> .sort() ti ordina gli elementi in ordine alfabetico e cambia tutto l'array
document.getElementById('arrayOrdinato').innerHTML = myArray; 




//--------FLUSSI CONDIZIONALI if---------


let peso = 16;

//if semplice
if(peso > 15){
    document.getElementById('semplice').innerHTML = 'il peso è superiore alla portata del pallet';
};

//else
if(peso <= 15){
    document.getElementById('else').innerHTML = 'Il peso è adatto alla portata del pallet';
}else{
    document.getElementById('else').innerHTML = 'Il peso è troppo pesante';
};

let nps = 45;

//else if
if(nps <= 35){
    document.getElementById('elseIf').innerHTML = 'NPS insufficente';
}else if(nps <= 70){
    document.getElementById('elseIf').innerHTML = 'NPS sufficente';
}else{
    document.getElementById('elseIf').innerHTML = 'NPS ottimo';
};


//range di condizioni
let voto = 8.5;
let presenze = 60;

if(voto >= 7.5 || presenze >= 70){
    document.getElementById('operatoriLogici').innerHTML = 'Corso valido';
}else {
    document.getElementById('operatoriLogici').innerHTML = 'Corso non valido';
};



document.getElementById('sucessivo').innerHTML = 'Js va avanti';
=======

//--------OGGETTO---------

const myOggetto = {
    // nomeValore1: valore,
    name: 'Giacomo',
    surname: 'Draghetti',
    age: 20,
    hasWebcam: true,
};

console.log(myOggetto.name); //----------->> meglio usare questo metodo per richiamrare un valore dentro un oggettto
console.log(myOggetto['surname']);
document.getElementById('oggetto').innerHTML = myOggetto.name;

myOggetto.email = 'jack.draghetti2002@gmail.com';
document.getElementById('oggetto').innerHTML += '<br>' + myOggetto.email;
console.log(myOggetto.email);

delete myOggetto.email
document.getElementById('oggetto').innerHTML += '<br>' + myOggetto.email;
console.log(myOggetto.email);

const myOggetto2 = myOggetto
myOggetto2.name = 'Giovanni'
console.log(myOggetto.name);


//---prof

const oggetto = {
    name: 'Dario',
    surname: 'Del Giudice',
    age: 56,
    docente: true,
};

document.getElementById('name').innerHTML = oggetto.name;
document.getElementById('surname').innerHTML = oggetto.surname;
document.getElementById('age').innerHTML = oggetto.age;
document.getElementById('docente').innerHTML = oggetto.docente;

oggetto.email = 'nome@gmail.com';
document.getElementById('email').innerHTML += oggetto.email;

delete oggetto.email
document.getElementById('delete').innerHTML += oggetto.email;

const newOggetto = oggetto;
newOggetto.name = 'Pippo';
document.getElementById('primo').innerHTML += oggetto.name;
document.getElementById('secondo').innerHTML += newOggetto.name;

const altroOggetto = Object.assign({}, oggetto);
altroOggetto.name = 'Paperino';
document.getElementById('precedente').innerHTML += oggetto.name;
document.getElementById('new').innerHTML += altroOggetto.name;

const altroOggetto1 = {...oggetto};
altroOggetto1.name = 'Pluto';
document.getElementById('vecchio').innerHTML += oggetto.name;
document.getElementById('giovane').innerHTML += altroOggetto1.name;


//---prof



//--------ARRAY---------

const myArray = [
    'gatto',
    'cane',
    'coniglio', 
];
document.getElementById('array').innerHTML = myArray;
console.log(myArray[0]);

document.getElementById('primaVoce').innerHTML = myArray[0];
document.getElementById('secondaVoce').innerHTML = myArray[1];
document.getElementById('terzaVoce').innerHTML = myArray[2];

myArray.sort(); //------>> .sort() ti ordina gli elementi in ordine alfabetico e cambia tutto l'array
document.getElementById('arrayOrdinato').innerHTML = myArray; 




//--------FLUSSI CONDIZIONALI if---------


let peso = 16;

//if semplice
if(peso > 15){
    document.getElementById('semplice').innerHTML = 'il peso è superiore alla portata del pallet';
};

//else
if(peso <= 15){
    document.getElementById('else').innerHTML = 'Il peso è adatto alla portata del pallet';
}else{
    document.getElementById('else').innerHTML = 'Il peso è troppo pesante';
};

let nps = 45;

//else if
if(nps <= 35){
    document.getElementById('elseIf').innerHTML = 'NPS insufficente';
}else if(nps <= 70){
    document.getElementById('elseIf').innerHTML = 'NPS sufficente';
}else{
    document.getElementById('elseIf').innerHTML = 'NPS ottimo';
};


//range di condizioni
let voto = 8.5;
let presenze = 60;

if(voto >= 7.5 || presenze >= 70){
    document.getElementById('operatoriLogici').innerHTML = 'Corso valido';
}else {
    document.getElementById('operatoriLogici').innerHTML = 'Corso non valido';
};



document.getElementById('sucessivo').innerHTML = 'Js va avanti';
>>>>>>> bbc085b90199f02e42861909e83893eef74a13ba
