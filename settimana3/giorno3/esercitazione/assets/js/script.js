

let btn = document.getElementById('addTask')

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let nomeTask = document.getElementById('newTask');
    nomeTask = nomeTask.value;

    if (nomeTask === '') {
        alert('poniti un obbiettivo')
    } else {
        document.getElementById('toDoList').innerHTML += `<li>${nomeTask} <button class="eliminaRow">elimina</button></li>`
        document.getElementById('newTask').value = ``
    }
})

let btnRow = document.getElementsByClassName('eliminaRow')

function eliminaRow(){
    let btnRow = document.getElementsByClassName('eliminaRow')
}



