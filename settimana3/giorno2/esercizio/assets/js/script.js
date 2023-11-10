/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
  let changeTitle = document.querySelector('h1').innerText = `Questo titolo è stato modificato come descritto nell'esercizio uno`;
  return changeTitle
}

changeTitle()

/* prof

const changeTitle = function () {
  document.querySelector('h1').innerText = `Questo titolo è stato modificato come descritto nell'esercizio uno`;
}
changeTitle()

 prof */

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    let addClassToTitle = document.querySelector('h1').classList.add("myHeading");
    return addClassToTitle
}

addClassToTitle()

/* prof

const addClassToTitle = function () {
    document.querySelector('h1').classList.add("myHeading");
}
addClassToTitle()

 prof */

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    let changePcontent = document.querySelectorAll('div p');
    changePcontent.forEach(element => element.innerText = `questo testo è stato cambiato come descritto nell'esercizio tre`)
    return changePcontent
}

console.log(changePcontent());

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    let changeUrls = document.querySelectorAll('div:nth-child(2) a');
    
    for (let i = 0; i < changeUrls.length; i++){
        changeUrls[i].href = 'https://www.google.com'
    } 
    return changeUrls
}

changeUrls()

/* prof

links.forEach((element) => [
    element.setAttribute('href', 'https://www.google.com') //--->> più giusto perchè aggiunge proprio l'href
    element.href = 'https://www.google.com'
])

 prof */


/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    let addToTheSecond = document.querySelector('#secondList');
    let newLi = document.createElement('li');
    newLi.innerText = '4rt';
    addToTheSecond.appendChild(newLi)
    return addToTheSecond
}

addToTheSecond()

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    let primoDiv = document.getElementById('primoDiv') 
    //let primoDiv = document.querySelectorAll('div')[0] //------>> si usa quando un certo div, non il primo, deve fare una determinata cosa 
    let newP = document.createElement('p')
    newP.innerText = 'Hello'
    primoDiv.appendChild(newP)
    return primoDiv
}

addParagraph()

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    let addToTheSecond = document.querySelector('#firstList').classList.add('hidden');
    //document.getElementById('firstList').style.display = 'none'; //----->> si può fare anche così
    //document.getElementById('firstList').remove;
    return
}

hideFirstUl()

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    let paintItGreen = document.querySelectorAll('ul li');
    paintItGreen.forEach((element) => element.style.backgroundColor = 'green');
    return paintItGreen
}

paintItGreen()

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

/* const makeItClickable = function makeItClickable() {
    let makeItClickable = document.querySelector('h1');
    console.log(makeItClickable);
    for(let i = 0; i < makeItClickable.length; i++){
        makeItClickable.delete(makeItClickable[i].length - 1)
        console.log(makeItClickable);
    }
    return makeItClickable;
} */

const makeItClickable = function () { //--->> prof
    const titolo = document.querySelector('h1');
    titolo.onclick = function () {
        titolo.innerText = titolo.innerText.slice(0, -1);
    }
};

makeItClickable()



/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function revealFooterLink() {
    let linkFooter = document.querySelector('footer h3 a');
    let link = linkFooter.href
    alert(link)
    return
}

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { 

    //fare un array di oggetti: prodotti
    //richiamare il contenitore con id tableArea
    //creo un elemento tabella
    // do una larghezza alla tabella
    //creo prima riga(intestazione) tr
    //creo 4 colonne con intestazione delle colonne e alle colonne assegno la stringa con le intestazioni th
    
}

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () { }