/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
let l1;
let l2;

function area2(l1, l2){
    
    return l1 * l2
}

console.log(area2(2, 3));

//------con i form
let base;
let aletzza;
let calcolo
let risultato

function area() {
    /* base per altezza diviso 2 */
    base = document.getElementById('base').value
    altezza = document.getElementById('altezza').value

    if ((controlla())) {
        calcola();
        scrivi();
        cancellaFormArea();
    } else {
        return;
    }
}

function controlla() {
    if (base === '' || altezza === '') {
        alert("inserie un numero");
        return false;
    } /* else if (typeof numero1 != 'number' || typeof numero2 != 'number'){
        alert('inserrie numeri validi');
        return false
    } */ else {
        return true;
    }
}

function calcola() {
    calcolo = (base * altezza);
}

function scrivi() {
    document.getElementById('risultatoArea').innerHTML +=  calcolo;
}

function cancellaFormArea() {
    document.getElementById('base').value = '';
    document.getElementById('altezza').value = '';
}
//------con i form


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (numeroIntero1, numeroIntero2) {
    
    Math.floor(numeroIntero1 = 12,3); 
    Math.floor(numeroIntero2 = 12,6); 

    if (numeroIntero1 === numeroIntero2) {
        return (numeroIntero1 + numeroIntero2) * 3 ;
    } else {
        return numeroIntero1 + numeroIntero2;
    }
}

console.log(crazySum());

//------con i form

let n1;
let n2;
let somma;

function crazySum2 () {
    
    n1 = document.getElementById('numeroIntero1').value
    n2 = document.getElementById('numeroIntero2').value

    calcolaSum()
    scriviSum()
    cancellaFormSum()
} 

function calcolaSum() {
    
    somma = Math.floor(Number(n1) + Number(n2))
    
    if (n1 === n2){
        return somma *= 3
    } else {
        return somma
    }

}

function scriviSum(){
    document.getElementById('risultatoSum').innerHTML += calcolaSum();
}

function cancellaFormSum() {
    document.getElementById('numeroIntero1').value = '';
    document.getElementById('numeroIntero2').value = '';
}

//------con i form

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numeroFornito) {
    numeroFornito = 13;
    
    if (numeroFornito < 19) {
        return (numeroFornito - 19) * -1
    } else if (numeroFornito === 19) {
        return (numeroFornito - 19) * 0
    } else {
        return (numeroFornito - 19) * 3 
    }
}

console.log(crazyDiff());

//------con i form

let nFornito;
let differenza;

function crazyDiff2() {
    
    nFornito = document.getElementById('nFornito').value

    calcolaDiff()
    scriviDiff()
    cancellaFormDiff()
}

function calcolaDiff(){
    
    if (nFornito < 19) {
        return differenza = (nFornito - 19) * -1
    } else if (nFornito === 19) {
        return differenza = (nFornito - 19) * 0
    } else {
        return differenza = (nFornito - 19) * 3 
    }
}

function scriviDiff(){
    document.getElementById('risultatoDiff').innerHTML += differenza;
}

function cancellaFormDiff() {
    document.getElementById('nFornito').value = '';
}

//------con i form

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    
    Math.floor(n)

    if (n > 20 && n <= 100) {
        return 'Il numero è compreso tra 20 e 100'
    } else if (n === 400) {
        return 'il numero è 400'
    } else {
        return 'Il numero non è compreso tra 20 e 100 e non è 400'
    }
}

console.log(boundary(22));

//----prof

function boundary1(n) {
    
    let vero = false;

    if (n === 400 || (n > 20 && n <= 100)) {
        return true;
    }
    return vero
}
console.log('Esercizio 4 - prof');
console.log(boundary1(45));

//----prof

//------con i form

let nInserito;
let controlloNTrueFalse;

function controlloN() {

    nInserito = document.getElementById('nInserito').value;

    controlloTrueFalse()
    scriviN()
    cancellaFormN()
}

function controlloTrueFalse() {

    let veroN = false

    if (nInserito === 400 || (nInserito > 20 && nInserito <= 100)) {
        return true;
    }
    return veroN

    controlloNTrueFalse = veroN
}

function scriviN() {
    document.getElementById('risultatoN').innerHTML += controlloNTrueFalse;
}

function cancellaFormN() {
    document.getElementById('nInserito').value = '';
}

//------con i form

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {            
    string = 'EPICODE, mi chiamo giacomo'
    let controllo = string.search('EPICODE')
    console.log(controllo);
    if (controllo === 0){
        return string
    } else {
        return 'EPICODE' + string
    }
}

console.log(epify());

//------>> bisogna provare ad usare .startsWith()

function epify(string) {            
    string = ' mi chiamo giacomo'
    
    if (string.startsWith('EPICODE')){
        return string
    } else {
        return 'EPICODE' + string
    }
}

console.log(epify());

//------con i form

let sInserita;

function controlloS(){

    sInserita = document.getElementById('sInserita').value;
    
    controlloStringa()
    scriviStringa()
    cancellaFormStringa()
}

function controlloStringa() {
    if (sInserita.startsWith('EPICODE')){
        return 'Alla tua frase non è stata aggiunta nessuna parola: ' + sInserita
    } else {
        return 'Alla tua frase è stata aggiunta la parola "EPICODE": ' + 'EPICODE' + ' ' + sInserita
    }
}

function scriviStringa() {
    document.getElementById('risultatoStringa').innerHTML += controlloStringa()
}

function cancellaFormStringa() {
    document.getElementById('sInserita').value = '';
}

//------con i form

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(Number) {       
    Number = 4
    let poisitveNumber = Number

    if(Number < 0){
        positiveNumber = Number  * -1
    }

    if (poisitveNumber % 3 === 0) {
        return 'il numero è multiplo di 3';
    } else if (poisitveNumber % 7 === 0) {
        return 'il numero è multiplo di 7';
    } else {
        return 'il numero non è multiplo nè di 3 nè di 7';
    }
}
console.log(check3and7());

//------->> aggiungere un else if per la condizione se divisibile per 7 e 3 

function check3and7P(Number) {       
    Number = 21
    let poisitveNumber = Number

    if(Number < 0){
        positiveNumber = Number  * -1
    }

    if (poisitveNumber % 3 === 0 && poisitveNumber % 7 === 0){
        return 'il numero è multiplo sia di 3 che di 7';
    } else if (poisitveNumber % 3 === 0) {
        return 'il numero è multiplo di 3';
    } else if (poisitveNumber % 7 === 0) {
        return 'il numero è multiplo di 7';
    } else {
        return 'il numero non è multiplo nè di 3 nè di 7';
    }
}
console.log(check3and7P());

//------con i form

let nMultiplo;

function controlloNMultiplo(){
    nMultiplo = document.getElementById('nMultiplo').value;

    controlloNMultiplo3o7()
    scriviMultiplo()
    cancellaFormMultiplo()
}

function controlloNMultiplo3o7(){

    if(nMultiplo < 0){
        nMultiplo *= -1
    }

    if (nMultiplo % 3 === 0 && nMultiplo % 7 === 0){
        return 'è multiplo sia di 3 che di 7';
    } else if (nMultiplo % 3 === 0) {
        return 'è multiplo di 3';
    } else if (nMultiplo % 7 === 0) {
        return 'è multiplo di 7';
    } else {
        return 'non è multiplo nè di 3 nè di 7';
    }
}

function scriviMultiplo(){
    document.getElementById('risultatoControlloMultiplo').innerHTML += controlloNMultiplo3o7(); 
}

function cancellaFormMultiplo() {
    document.getElementById('nMultiplo').value = '';
}

//------con i form

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {

    str = 'Angolo bar a Bologna'

    return str.split("").reverse().join("");
}

console.log('Frasi palindrome: ' + reverseString());

//------con i form

let str2;

function reverseString1(){

    reverseString2()
    scriviFraseGirata()
    cancellaFormFraseGirata()
}

function reverseString2() {

    str2 = document.getElementById('string2').value;
    return str2.split("").reverse().join("");
}

function scriviFraseGirata(){
    document.getElementById('fraseReverse').innerHTML += reverseString2();
}

function cancellaFormFraseGirata() {
    document.getElementById('string2').value = '';
}

//------con i form

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {

    string = 'mi piace arrampicare'

    const arr = string.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");

    return str2
}
console.log(upperFirst());

//------con i form

function upperFirst1(){

    upperFirst2()
    scriviUpperFirst()
    cancellaFormUpperFirst()
}

function upperFirst2() {

    let str3 = document.getElementById('str3').value;
    
    const arr1 = str3.split(" ");

    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);

    }
    const str4 = arr1.join(" ");

    return str4
}

function scriviUpperFirst(){
    document.getElementById('fraseUpperFirst').innerHTML += upperFirst2();
}

function cancellaFormUpperFirst() {
    document.getElementById('str3').value = '';
}

//------con i form

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (stringP) {
    
    stringP = 'ciao zio paperone'

    return stringP.slice(1, stringP.length - 1)
}

console.log(cutString());

//------con i form

function cutString1(){

    CutString2()
    scriviCutString()
    cancellaFormCutString()
}

function CutString2() {

    let str5 = document.getElementById('str5').value;

    return str5.slice(1, str5.length - 1)
    
}

function scriviCutString(){
    document.getElementById('fraseCutString').innerHTML += CutString2();
}

function cancellaFormCutString() {
    document.getElementById('str5').value = '';
}

//------con i form

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    n = Math.floor(Math.random() * 11);
    console.log(n);

    const arr = []
    
    for (let i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 11))
    }

    return arr
}

console.log(giveMeRandom());


//------con i form

let nRandom;

function giveMeRandom1(){

    creaArray()
    scriviNRandom()
    cancellaFormRandom()

}

function creaArray() {

    nRandom = document.getElementById('nRandom').value

    const arr = []
    
    for (let i = 0; i < nRandom; i++){
        arr.push(Math.floor(Math.random() * 11))
    }

    return arr
}

function scriviNRandom(){
    document.getElementById('risultatoArrayRandom').innerHTML += creaArray();
}

function cancellaFormRandom() {
    document.getElementById('nRandom').value = '';
}

//------con i form
