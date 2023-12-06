
let tuttiINomi = [];
let nome
let elementiSalvati = document.getElementById('elementiSalvati')

function controllaCampoInput(){
    if(document.getElementById('nome').value === ''){
        alert('Devi scrivere un nuome nell\'input')
    }
}


const salvaNome = () => {

    controllaCampoInput()
    inseriscoNomeInArray()
}

const inseriscoNomeInArray = () => {
    nome  = document.getElementById('nome').value

    tuttiINomi.push(nome)
    console.log(tuttiINomi);

    elementiSalvati.innerHTML = `Ciao ${nome}`

    document.getElementById('nome').value = ''

    localStorage.setItem('tuttinomi', tuttiINomi);
}

const rimuoviNome = () => {
    
    controllaCampoInput()
    tolgoNome()
}

const tolgoNome = () => {
    localStorage.removeItem('tuttinomi')
}

/* ------------------------ counter ------------------------ */


let counter = document.getElementById('counter')
let numeri = 0

let timer = setInterval(function() {
    numeri ++
    document.getElementById('counter').innerHTML = numeri;
    sessionStorage.setItem('timer', numeri);
}, 1000)

sessionStorage.setItem('test', 1);

/* --- ptof --- */

let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;
const conta = function (){
    i = i + 1
    document.getElementById('counter1').innerText = i;
    sessionStorage.setItem("count", i)
}
setInterval(conta(), 1000)
