class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }

    sameOwner(pet1, pet2) {
        if (pet1.ownerName === pet2.ownerName) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}


pet1 = new Pet('Satana', 'Gallo', 'cane', 'carlino')
pet2 = new Pet('Pucci', 'Gallo', 'cane', 'pastore tedesco')

pet1.sameOwner(pet1, pet2)

/* --------------------- */

let petName
let ownerName
let species
let breed
let pets = [];


/* ----------------------- fatta con class ----------------------- */

/* DA VEDERE ASSOLUTAMENTE */

/* ----------------------- fatta con class ----------------------- */

function stampaPet() {

    inseriscoIlNuovoPetInUnArray()
    cancellaForm()
}

function inseriscoIlNuovoPetInUnArray() {
    petName = document.getElementById('Pet-name').value
    ownerName = document.getElementById('Owner-name').value
    species = document.getElementById('Species').value
    breed = document.getElementById('Breed').value

    let newPet = {
        name: petName,
        ownername: ownerName,
        species: species,
        breed: breed,
    }
    pets.push(newPet)

    stampaDatiDeiPets()
    controlloPadroni()
}


function stampaDatiDeiPets() {

    let list = document.createElement('ul')
    let listItem = document.createElement('li')
    listItem.innerHTML = `${petName} è il nome del mio ${species}, è un ${breed}. Piacere io sono ${ownerName}`
    document.body.append(list);
    list.appendChild(listItem)

}

/* function controlloPadroni(){
    if(pets.length > 1){
        for(let i = 0; i < (pets.length - 1) ;i++){
            //if(pets[i].ownername === pets[i + 1].ownername){
            //    document.getElementById('sameOwner').innerHTML = pets[i].ownername + ' è il padrone di ' + pets[i].name + ' e di ' + pets[i++].name
            //}
            if (pets[i].ownerName !== pets[i+1].ownerName) {
                console.log(false);
            } else {
                console.log(true);
            } 
        }
    } 
} */

function cancellaForm() {
    document.getElementById('Pet-name').value = '';
    document.getElementById('Owner-name').value = '';
    document.getElementById('Species').value = '';
    document.getElementById('Breed').value = '';
}
