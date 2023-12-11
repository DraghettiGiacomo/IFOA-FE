const url = 'https://striveschool-api.herokuapp.com/books'

fetch(url)
    .then(response => response.json()
        .then(data => populateHomePage(data)))

function populateHomePage(data) {

    data.forEach(bookElement => {

        let card = document.createElement('div')
        card.classList.add('card', 'p-0')


        let img = document.createElement('img')
        img.src = bookElement.img
        img.classList.add('card-img-top')
        img.alt = bookElement.title


        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'p-4')


        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = bookElement.title


        let cardText = document.createElement('div')
        cardText.classList.add('car-text', 'd-flex', 'justify-content-between')


        let category = document.createElement('p')
        category.innerText = bookElement.category
        let price = document.createElement('p')
        price.innerText = bookElement.price + '€'
        cardText.appendChild(category)
        cardText.appendChild(price)


        let buttons = document.createElement('div')
        buttons.classList.add('row', 'd-flex', 'justify-content-between', 'gap-3')
        let bntInfo = document.createElement('button')
        bntInfo.classList.add('col-4', 'btn', 'btn-primary')
        bntInfo.innerText = 'Dettagli'
        let btnDelete = document.createElement('button')
        btnDelete.classList.add('col-4', 'link-danger', 'd-flex', 'align-items-center', 'justify-content-center', 'gap-2', 'border', 'border-danger')
        btnDelete.innerText = 'Scarta'
        btnDelete.setAttribute('onclick', 'cancellaElemento(event)')
        /* btnDelete.addEventListener('onclick', {

        }) */
        let iconDelete = document.createElement('i')
        iconDelete.classList.add('bi', 'bi-x-circle-fill')
        btnDelete.appendChild(iconDelete)
        let btnAddToCart = document.createElement('button')
        btnAddToCart.classList.add('col-12', 'btn', 'btn-warning', 'd-flex', 'justify-content-center', 'align-items-center', 'gap-2')
        btnAddToCart.innerText = 'Add To Shop'
        //btnAddToCart.setAttribute('onclick', aggiungiAlCarrello())
        let iconShop = document.createElement('i')
        iconShop.classList.add('bi', 'bi-cart-fill')
        btnAddToCart.appendChild(iconShop)

        buttons.appendChild(bntInfo)
        buttons.appendChild(btnDelete)
        buttons.appendChild(btnAddToCart)


        let cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer')
        let asin = document.createElement('small')
        asin.innerText = bookElement.asin



        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(buttons)

        cardFooter.appendChild(asin)

        card.appendChild(img)
        card.appendChild(cardBody)
        card.appendChild(cardFooter)

        document.querySelector('#root').appendChild(card)
    });

}
/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class='buttons row'>
        <a href="#" class="col btn btn-primary">Go somewhere</a>
        <a href="#" class="col link-danger">Delete <i class="bi bi-x-circle-fill"></i></a>
        <a href="#" class="btn btn-warning">Add to cart <i class="bi bi-cart-fill"></i></a>
    </div>
  </div>
  <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
</div>
*/

/* function cancellaElemento() { //-------->>> così facendo riesco a vedere in console il file json creato a partire dall'url

    fetch(url)
        .then(response => response.json()
        .then(data => {
            data.forEach((libro) => function(indice, ) {
                console.log(libro.asin)
            })
        })) */

    /* console.log(data); */

    /* data.forEach( asinDaCancellare => {
        let asin = asinDaCancellare.asin
        console.log(asin);
    }) */
//}

/* const cancellaElemento = (event) => {
    event.target.closest('col').remove()
} */

