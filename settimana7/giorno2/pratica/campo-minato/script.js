
let campo = document.getElementById('campo')


function creazioneSquare(){
    for(i = 0; i < 100; i++){
        let square = document.createElement('div')
        square.classList.add('sqaure')

        campo.appendChild(square)
    }
}
creazioneSquare()




