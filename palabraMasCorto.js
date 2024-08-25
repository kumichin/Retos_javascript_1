
/*
Escriba una función shortestWordque acepte una oración como argumento.
La función debe devolver la palabra más corta de la oración.
Si hay un empate, devolver la palabra que aparece más adelante en la oración.
*/


function shortestWord(sentence){
    let palabras = sentence.split(" ");
    let masCortas = "";

    //ordeno las palabras por tamaño
   masCortas = palabras.sort((a, b) => a.length - b.length);

   //luego corto la primera y la devuelvo
   masCorta = masCortas.shift()

   //devuelvo la parte eliminada
   return masCorta
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
