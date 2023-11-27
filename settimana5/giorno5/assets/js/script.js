window.addEventListener('scroll', function() {
    if(window.pageYOffset > 300){
        document.getElementById('navBar').style.backgroundColor = "#fff";
        /* document.getElementsByClassName('.button').style.backgroundColor = "#1a8917"; */
        this.document.getElementById('buttonNav').style.backgroundColor = "#1a8917";
    } else {
        document.getElementById('navBar').style.backgroundColor = "#ffc017";
        /* document.getElementsByClassName('.button').style.backgroundColor = "#000"; */
        this.document.getElementById('buttonNav').style.backgroundColor = "#000";
    }
    /* let changeColor = document.getElementById('navBar').style.backgroundColor = "#fff"; *//* innerHTML = window.pageYOffset + 'px'; */
  });



/* ------------------------------- MMM ------------------------------- */


/* creare un array dome inserisco le 'g' con opacità = 0/1, dopodichè genero dei numeri casuali li passo come indice dell'array e a qull'indice cambio l'opacità per qualche secondo*/

window.addEventListener('load', function() {
    const mmm = document.querySelectorAll('#MMM g')
    console.log(mmm);

    var makeArray = function( list ) {
        if( !list instanceof NodeList ) {
            return;
        }
        var arr = [];
        
        for( var i = 0; i < list.length; ++i ) {
            var node = list[i];
            arr.push( node );
        }
        
        return arr;
    };
    var elemArr = makeArray( mmm );
    /* var revArr = elemArr.reverse(); */

    console.log(elemArr);

    const realArr = []
    
    for(let i = 0; i < elemArr.length; i++){
        if(elemArr[i].hasAttribute('opacity') === true){
            realArr.push(realArr[i])
        }
    }

    console.log(realArr);

});




























































