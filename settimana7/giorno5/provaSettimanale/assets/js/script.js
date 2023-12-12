
const url = "https://striveschool-api.herokuapp.com/api/product/"
const API = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTk0YWMwNTgzNTAwMTg1MjJjOTciLCJpYXQiOjE3MDIzNjk2MTEsImV4cCI6MTcwMzU3OTIxMX0.jUohRH0WPY_g60miwoAf65dplTJNRZR8GFU1qrBdD7E"
let header =  {
    "Authorization": API,
    "Content-Type": "application/json"
}
/* fetch(url, {
    method: 'POST',
    headers: {
        "Authorization": API,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "name": nome,
        "description": descriptionPhone,
        "brand": brand,
        "imageUrl": urlImmagine,
        "price": price
    })
})

fetch(url, {
    headers: {
        "Authorization": API
    }
})
.then(response => response) */


/* -------******-------******-------****** PAGE HOME ******-------******-------******------- */

window.onload = () => {
    fetch(url, {
        headers: header
    })
        .then(response => response.json())
        .then(data => {
            /* console.log(data); */
            createCards(data)
        })
}

function createCards(data) {
    let divPadre = document.getElementById('products')
    divPadre.innerHTML = ''
    data.forEach(element => {
        let card = document.createElement('div')
        card.classList.add('card', 'col-3', 'mx-4', 'my-2', 'p-0', 'border', 'border-dark')
        card.innerHTML = `
        <img src="${element.imageUrl}" class="img-fluid" alt="${element.name}" href="details.html">
        <div class="card-body">
        <h5 class="card-title" href="details.html">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>${element.brand}</b></p>
            <p class="card-text"><b>${element.price}€</b></p>
        </div>
        </div>
        <div class="card-footer d-flex justify-content-start">
        <button class="btn btn-warning mx-3" href="back.html" onclick="modificaCard('${element}')">Modifica</button>
        <button class="btn btn-primary" href="details.html" onclick="detailPage('${element}')">Dettagli</button>
        </div>`
        divPadre.appendChild(card)
    });
}

const modificaCard = (el) => {
    window.location.href = "./back.html"

    console.log(el);

    nascondiDelete()
    
    document.getElementById('name').value = el.name
    document.getElementById('brand').value = el.brand
    document.getElementById('url').value = el.url
    document.getElementById('price').value = el.price
    document.getElementById('description').value = el.description
}

function nascondiDelete() {
    let btnDelate = document.getElementById('delete')
    btnDelate.style.display = 'none'
}

{/* 
<button class="btn btn-danger" onclick="deleteProduct(this)">Delete</button>
const deleteProduct = (el) => {
    el.closest('.card').remove()
} 
*/}

/* -------******-------******-------****** PAGE HOME ******-------******-------******------- */




/* -------******-------******-------****** PAGE BACK ******-------******-------******------- */

/* const deleteCard = (el) => { ///---------->>> delete function
    fetch(url, {
        method: 'DELETE',
        headers: header
    })
    .then(response => response.json())
    .then(data => console.log(data))

    el.closest('.card').remove()
} */

function vuotaCampi(){
    document.getElementById('name').value = ''
    document.getElementById('brand').value = ''
    document.getElementById('url').value = ''
    document.getElementById('price').value = ''
    document.getElementById('description').value = ''

    alert('Sei sicuro di voler vuotare i campi')
}

function saveDetails(el){
    let nome = document.getElementById('name').value
    let brand = document.getElementById('brand').value
    let urlImmagine = document.getElementById('url').value
    let price = document.getElementById('price').value
    let descriptionPhone = document.getElementById('description').value

    console.log(nome, brand, urlImmagine, price, descriptionPhone);

    fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
            "name": nome,
            "description": descriptionPhone,
            "brand": brand,
            "imageUrl": urlImmagine,
            "price": price
        })
    })
    .then(response => {
        window.location.href = "./index.html"
    })
    .then(response => {
        open('#bottom')
    })
}

/* -------******-------******-------****** PAGE BACK ******-------******-------******------- */


/* -------******-------******-------****** PAGE DATAILS ******-------******-------******------- */


function detailPage(el){
    window.location.href = "./details.html"

    console.log(el); 

    createLayoutPage(el)
}

function createLayoutPage(el){

    let containerDad = document.getElementById('mainDetails')
    let rowSon = document.createElement('div')
    rowSon.classList.add('row')
    rowSon.innerHTML = `
        <div class="col">
            <img src="${el.imageUrl}" alt="${el.name}">
            </div>
            <div class="col">
                <h2>${el.name}</h2>
                <p>${el.description}</p>
                <p>${el.brand}</p>
                <span class="display-4"><b>${el.price}€</b></span>
            </div>
        </div>`

    containerDad.appendChild(rowSon) 
}

/* -------******-------******-------****** PAGE DATAILS ******-------******-------******------- */
