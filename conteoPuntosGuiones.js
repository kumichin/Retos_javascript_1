

/*
Si hay mas puntos que guiones devuelve true, si hay menos devuelve false
*/

// Your code here
function moreDotLessDash(str){
    let puntos = 0;
    let guiones = 0;

 for(let i = 0; i < str.length; i++){
    let char = str[i];
     if( char === "."){
         puntos++
     } else if( char === "-"){
         guiones ++
     }

     } return puntos > guiones;
 }



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));
