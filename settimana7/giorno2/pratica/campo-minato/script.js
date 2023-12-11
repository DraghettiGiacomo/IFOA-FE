
let campo = document.getElementById('campo')

let allSquare = []


function creazioneSquare(){
    for(i = 0; i < 100; i++){
        let square = document.createElement('div')
        square.classList.add('sqaure')
        square.setAttribute("onclick", "step(this)");

        allSquare.push(square)

        campo.appendChild(square)
    }
}
creazioneSquare()

let easy = 25

function bombs(){
    for(i = 0; i < easy; i++){
        let casual = Math.floor(Math.random()*allSquare.length)
        console.log(casual);
        allSquare[casual].classList.add('bomb')
    }
}
bombs()

function step(e) {
    if (!e.classList.contains("bomb") /* && play == 1 */) {
        e.classList.add("good");
        point++
        document.getElementById("point").innerText = point;
        youWin()
    } else if (e.classList.contains("bomb") /* && play == 1 */) {
        e.classList.add("exploded");
        play = 0;
        /* document.getElementById("gameover").style.opacity = "1"; */
    }
}

/* function youWin(){
    if(point = totalpoint){
        let body = document.getElementsByTagName('body')
        body.innerText = 'You Win!!!'
    }
}
 */

/* let radioBtn = document.querySelectorAll('.radioBtn')

function diffuclt(){
    console.log(radioBtn.id);
} */
let totalpoint = 100 - easy
let point = 0






