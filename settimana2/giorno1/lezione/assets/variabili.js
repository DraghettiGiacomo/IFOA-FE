let globale1 = 5;
let globale2 = 5;

function somma() {
    return globale1 + globale2
}

document.getElementById('sommaGlobale').innerHTML = somma();

function somma1() {
    let globale1 = 5;
    let globale2 = 5;

    document.getElementById('sommaLocale').innerHTML = globale1 + globale2;
}

