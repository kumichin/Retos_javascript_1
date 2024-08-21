
/*
Hasta ahora has aprendido a escribir tus propios bucles, pero hay algunos métodos que iterarán por ti . Uno de esos métodos es el Array.indexOf()método . El indexOf()método devuelve el primer índice que encuentra para el elemento dado, o -1 si no se encuentra el elemento.

Escribe una función llamada wordWithinArray(array,word)using Array.indexOf. La función toma una palabra y una matriz de palabras como argumentos y devuelve un booleano que devuelve verdadero si esa cadena se encuentra dentro de la matriz, o falso si no lo está.
*/

function wordWithinArray(array, word) {
    // your code here...
   if(array.indexOf(word) != -1){
      return  true
   }else{
       return false
   }
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false
