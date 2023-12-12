const url = "https://striveschool-api.herokuapp.com/api/product/"
const API = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTk0YWMwNTgzNTAwMTg1MjJjOTciLCJpYXQiOjE3MDIzNjk2MTEsImV4cCI6MTcwMzU3OTIxMX0.jUohRH0WPY_g60miwoAf65dplTJNRZR8GFU1qrBdD7E"
let header =  {
    "Authorization": API,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

window.onload = function(){

    const urlParams = new URLSearchParams(window.location.search)
    const productID = urlParams
    console.log(productID);

    /* fetch(url+productID, {
        headers: header
    })
        .then(response => response.json())
        .then(data => {
            
            console.log(data)
        }) */
}

/* async function fetchProductDetails(productID){
    try {
        const response = await fetch(url + productID, {
            headers: header
        })

        if(!response.ok){
            throw new Error('Errore' + response.status)
        }

        const productDetails = await response.json()
        createLayoutPageDetails(productDetails)

    } catch (error){
        console.error(error)
    }
} */

function createLayoutPageDetails(productDetails){
    let containerDad = document.getElementById('mainDetails')
    let rowSon = document.createElement('div')
    rowSon.classList.add('row')
    rowSon.innerHTML = `
        <div class="col">
            <img src="${productDetails.imageUrl}" alt="${productDetails.name}">
            </div>
            <div class="col">
                <h2>${productDetails.name}</h2>
                <p>${productDetails.description}</p>
                <p>${productDetails.brand}</p>
                <span class="display-4"><b>${productDetails.price}€</b></span>
            </div>
        </div>`

    containerDad.appendChild(rowSon) 
}

/* ------------------------------ */

function detailPage(el){
    /* window.location.href = "./details.html" */

    console.log(el); 

    /* createLayoutPage(el) */
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



