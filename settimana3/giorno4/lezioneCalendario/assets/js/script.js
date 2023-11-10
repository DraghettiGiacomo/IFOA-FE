// 1 - dobbiamo capire in che mese siamo, per scriverlo nell'h1 e quanti giorni ha il mese, per inserire il numero esatto di celle 

const now = new Date();

// per salvare gli appuntamenti abbiamo bisogno di un array, perchè ogni appuntamento è una stringas ogni giorni può contenere infiniti appunt e ogni  mese ha un numero di giorni variabile. Creeremo quinidi un array di array, array padre rappresenta il mese mentre gli array figli rappresenta i giorni

const appointments = [];

// dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente 

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
];

const scriviMese = function () {
    const title = document.querySelector('h1'); // seleziono l'h1 nel DOM
    const indiceMese = now.getMonth(); // recupera il mese dalla data che abbiamo salvato sopra
    const nomeMese = monthNames[indiceMese]; // confronta l'indice del mese corrente con l'indice del nostro array 'monthNames'
    title.innerText = nomeMese;
}
scriviMese();

// calcoliamo quanti giorni ci sono nel mese corrente per creare le celle dei giorni

const giorniTot = function () {
    const anno = now.getFullYear();
    const mese = now.getMonth();

    let ultimoGiorno = new Date(anno, mese + 1, 0); // facciamo creare un giorno preciso a js ma per avere l'ultimo giorno del mese corrente dobbiamo ingannare js perciò scriviamo di cercare il giorno 0 del mese sucessivo e siccome non esiste va all'ultimo giorno del mese precedente 
    const numeroGiorni = ultimoGiorno.getDate();
    return numeroGiorni;
}
giorniTot()

const deselezionaCelle = function () {
    const celle = document.querySelectorAll('.day');
    celle.forEach((element) => {
        element.classList.remove('selected')
    })
}

// quando si clicca su un griono compare la data selezionata nell'id 'newMeetingDay'

const giornoAppuntamento = function (indiceGiorno) {
    const giorno = document.getElementById('newMeetingDay')
    giorno.classList.add('hasDay');
    giorno.innerText = indiceGiorno + 1;
}

// adesso va creata la griglia con i div che contengono i numeri dei giorni totali del mese corrente

const creaGriglia = function (numeroGiorni) {
    const calendarDiv = document.getElementById('calendar')

    for (let i = 0; i < numeroGiorni; i++) {
        const cellaGiorno = document.createElement('div');
        cellaGiorno.classList.add('day')
        cellaGiorno.addEventListener('click', function (e) {
            deselezionaCelle();
            cellaGiorno.classList.add('selected')
            giornoAppuntamento(i);

            if (appointments[i].length > 0) {
                mostraAppuntamenti(i)
            } else {
                const divAppuntamenti = document.getElementById('appointments');
                divAppuntamenti.style.display = 'none';
            }
        });
        const valoreCella = document.createElement('h3');
        valoreCella.innerText = i + 1;
        // appendo gli elementi creati
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);

        appointments.push([]);
    }
}


creaGriglia(giorniTot());

// si popola la lista degli appuntamenti del giorno con gli appuntamenti stessi

const mostraAppuntamenti = function (indiceGiorno) {
    const appuntamentiGiorno = appointments[indiceGiorno];
    const lista = document.querySelector('#appointments ul');
    lista.innerHTML = '';

    appuntamentiGiorno.forEach((element) => {
        const newLi = document.createElement('li');
        newLi.innerText = element;
        lista.appendChild(newLi);
    })

    const divAppuntamenti = document.getElementById('appointments');
    divAppuntamenti.style.display = 'block';
}

// creiamo nuovi appuntamenti

const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault();

    const selectedDay = document.getElementById('newMeetingDay').innerText;
    const meetingTime = document.getElementById('newMeetingTime').value;
    const meetingName = document.getElementById('newMeetingName').value;
    const stringAppuntamento = `${meetingTime} - ${meetingName}`;

    const indiceArray = parseInt(selectedDay) - 1;
    appointments[indiceArray].push(stringAppuntamento);

    // evidenzio i giorni che hanno gli appuntamento
    const pallino = document.createElement('div')
    pallino.classList.add('pallino');
    const divSelezionato = document.querySelector('.selected');
    
    if(!divSelezionato.querySelector('.pallino')){
        divSelezionato.appendChild(pallino)
    }

    mostraAppuntamenti(indiceArray);
});








