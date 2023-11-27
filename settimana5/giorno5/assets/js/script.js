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

window.addEventListener('load', function() {
    /* const mmm = document.querySelectorAll('#MMM g').style.setAttribute("display", "block")
    console.log(mmm); */

    document.querySelectorAll('#MMM g').style.getAttribute("opacity", "0")

    /* var makeArray = function( list ) {
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
    var revArr = elemArr.reverse();

    console.log(revArr[0]);
    const maremma = function  (arr){
        arr[0].style.setAttribute("display", "block")
    }
    console.log(maremma(revArr)); */
});




























































