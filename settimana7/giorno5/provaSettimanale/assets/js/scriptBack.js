

/* const deleteCard = (el) => { ///---------->>> delete function
    let id = el
    console.log(id)
    
    fetch(url + id, {
        method: 'DELETE',
        headers: header
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    el.closest('.card').remove()

    alert('Sicuro di voler eliminare questo prodotto')
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
    .then(response => {
        open('index.html')
    })
    .then(response => {
        open('#bottom')
    })
}

