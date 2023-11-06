<<<<<<< HEAD

//---->> le aplpicazioni vanno scomposte / particellizate


//Ricevere attraverso un form il nome  el'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età


/* 
1. LEGGERE IL CAMPO NOME E MEMORZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CONTROLLARE LA VALIDITà DEL FORM
4. CALCOLARE L'ETà
5. VERIFICARE LA MAGGIORE O MINORE ETà
6. SCRIVERE NELL'HTML
7. CANCELLARE IL FORM

EVENTO SCATENANTE:
click

VARIABILI GLOBALI -->> servono in più punti del codice
nome
anno
stato
*/


// CREO LE VARIABILI GLOBALI
let nome;
let anno;
let eta;
let stato;
let errore = document.getElementById('errore');

function eventHandler(){ //-->> serve per decicdere con che ordine parono le funzioni interne
    leggiForm();
    if (anno >= 1900 && anno <= 2023 && nome != '') {
        errore.innerHTML = '&nbsp';
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML = 'Attenzione! Inserire un numero tra 1900 e 2023';
        return;//--->> fa interrompere il fllusso di js e dopo non succede niente
    };
}

function leggiForm(){
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta(){
    eta = 2023 - Number(anno);//--->> converte il dato che arriva in un numero, è solo per sicurezza
}

function verifica(){
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

function scrivi(){
    document.getElementById('mioNome').innerHTML = 'Ciao' + nome; 
    document.getElementById('mioVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato; 
}

function cancellaForm(){
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';
}








=======

//---->> le aplpicazioni vanno scomposte / particellizate


//Ricevere attraverso un form il nome  el'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età


/* 
1. LEGGERE IL CAMPO NOME E MEMORZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETà
4. VERIFICARE LA MAGGIORE O MINORE ETà
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE:
click

VARIABILI GLOBALI -->> servono in più punti del codice
nome
anno
stato
*/


// CREO LE VARIABILI GLOBALI
let nome;
let anno;
let eta;
let stato;
let errore = document.getElementById('errore');

function eventHandler(){ //-->> serve per decicdere con che ordine parono le funzioni interne
    leggiForm();
    if (anno >= 1900 && anno <= 2023 && nome != '') {
        errore.innerHTML = '';
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML = 'Attenzione! Inserire un numero tra 1900 e 2023';
        return;//--->> fa interrompere il fllusso di js e dopo non succede niente
    };
}

function leggiForm(){
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta(){
    eta = 2023 - Number(anno);//--->> converte il dato che arriva in un numero, è solo per sicurezza
}

function verifica(){
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

function scrivi(){
    document.getElementById('dati').innerHTML += '<li>' + nome + '</li>'; 
    document.getElementById('dati').innerHTML += '<li>' + anno + '</li>'; 
    document.getElementById('dati').innerHTML += '<li>' + eta + '</li>'; 
    document.getElementById('dati').innerHTML += '<li>' + stato + '</li>';
}

function cancellaForm(){}








>>>>>>> bbc085b90199f02e42861909e83893eef74a13ba
