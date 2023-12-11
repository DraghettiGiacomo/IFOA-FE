
const APIkey = 'c7zheuja4UuojgEv6QkBOizP1TUZCFW2Jj8nyUsf511jxblpckGjrKnv';
const url = 'https://api.pexels.com/v1/search?query='
let endUrl
let singlecard

let allIMG = []


function buttonPtimary() {
    const infoButton = 'dog'
    endUrl = infoButton
    arrayFoto()
}

function buttonSecondary() {
    const secondaryButton = 'climbing'
    endUrl = secondaryButton
    arrayFoto()
}

function arrayNewName() {
    let newName = document.getElementById('newName').value
    endUrl = newName
    arrayFoto()
}

function arrayFoto() {
    fetch(url + endUrl, {
        headers: {
            'Authorization': APIkey
        }
    })
        .then(response => response.json())
        .then(data => {
            createCards(data.photos)
        })
}

function createCards(data) {
    data.forEach(element => {
        let singlecard = document.createElement('div')
        singlecard.classList.add('card', 'col-4', 'h-25')
        /* singlecard.setAttribute('onclick', 'newPage()') */
        singlecard.innerHTML = `
            <img src="${element.src.original}" class="img-fluid card-img-top" alt="images">
            <div class="card-body">
                <h5 class="card-title">${element.photographer}</h5>
                <p class="card-text">${element.photographer_id}</p>
                <a class="btn btn-primary">View</a>
                <a class="btn btn-primary" onclick="hide(this)">Hide</a>
            </div>`
        document.getElementById('contenitore').appendChild(singlecard)        
    });           
}

const hide = (el) => {
    el.closest('.col-4').remove()
}

/* function newPage(){
    console.log('ciao');
} */

