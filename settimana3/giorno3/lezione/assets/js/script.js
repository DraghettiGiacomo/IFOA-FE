
// VALIDAZIONE FORM

const btn = document.getElementById('invia');

btn.addEventListener('click', function (e) { //-->> la 'e' rappresenta l'evento del mouse
    e.preventDefault();
    let form = document.querySelector('form');
    let nome = document.getElementById('nome');
    let cognome = document.getElementById('cognome');
    let email = document.getElementById('email');
    let eta = document.getElementById('eta');

    if (!cognome.checkValidity()) {
        cognome.style.backgroundColor = 'red'
        document.getElementById('nomeForm').innerText = cognome.validationMessage;
        return;
    } else if (!email.checkValidity()) {
        email.style.backgroundColor = 'red'
        document.getElementById('nomeForm').innerText = email.validationMessage;
        return;
    } else if (!eta.checkValidity()) {
        eta.style.backgroundColor = 'red'
        document.getElementById('nomeForm').innerText = eta.validationMessage;
        return;
    }

    cognome.style.backgroundColor = 'red'
    email.style.backgroundColor = 'red'
    eta.style.backgroundColor = 'red'

    nome = nome.value
    cognome = cognome.value
    email = email.value
    eta = eta.value

    confirm('Sei sicuro dei dati inseriti?');

    if (confirm) {
        document.getElementById('nomeForm').innerText = nome
        document.getElementById('cognomeForm').innerText = cognome
        document.getElementById('emailForm').innerText = email
        document.getElementById('etaForm').innerText = eta
    } else {
        form.reset()
    }
})

// TIMING


