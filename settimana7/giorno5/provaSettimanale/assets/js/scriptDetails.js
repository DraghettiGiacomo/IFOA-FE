


function recuperoDati(){
    fetch(url, {
        headers: {
            "Authorization": API
        }
    })
    .then(response => response.json())
    .then(data => {
            /* console.log(data); */
            createDetailPage(data)
    })
}
    
    
    
    /* 

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

    containerDad.appendChild(rowSon) */



