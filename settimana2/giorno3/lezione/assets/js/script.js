let day = 'saturday';
let giorno;

/* if (day === 'monday') {
    giorno = 'lunedì';
} else if (day === 'tuesday') {
    giorno = 'martedì';
} else if (day === 'wednesday') {
    giorno = 'mercoledì';
} else if (day === 'thursday') {
    giorno = 'giovedì';
} else if (day === 'friday') {
    giorno = 'venerdì';
} else if (day === 'saturday') {
    giorno = 'sabato';
} else {
    giorno = 'domenica';
}; */

switch (day) {
    case 'moday':
        giorno = 'lunedì';
        break;

    case 'tuesday':
        giorno = 'martedì';
        break;

    case 'wednesday':
        giorno = 'mercoledì';
        break;

    case 'thursday':
        giorno = 'giovedì';
        break;

    case 'friday':
        giorno = 'venerdì';
        break;

    case 'saturday':
        giorno = 'sabato';
        break;

    default:
        giorno = 'domenica';
        break;
};

document.getElementById('giorno').innerHTML += giorno;

//------->> è un po' più veloce di 'if' ed è più leggibile
//------->> fino a 'else if' si usa 'if', oltre si usa switch case



//--------WHILE - DO WHILE---------

let numero1 = 1;

while (numero1 < 11) {
    document.getElementById('listaWhile').innerHTML += '<li>' + numero1 + '</li>';

    numero1++
};


let numero2 = 1;
document.getElementById('listaDoWhile').innerHTML += ''; //-------->> si usa qunado si vuole svuotare una lista che viene riempita con le informazioni date dall'utente
do {
    document.getElementById('listaDoWhile').innerHTML += '<li>' + numero2 + '</li>';

    numero2++
} while (numero2 < 11);


//--------FOR---------

const numeri = [4, 9, 16, 25, 49];
let somma = 0;

for (let i = 0 ; i < numeri.length; i++){
    somma += numeri[i];
}

document.getElementById('somma').innerHTML += somma;


