
/*
Escriba una función containsWord(sentence, targetWord)que acepte dos cadenas como
argumentos. La función debe devolver un valor booleano que indique si se
targetWord encuentra dentro de . Resuelva esto sin usar métodos o sentencede cadenas.
indexOf()includes()
*/

// your code here
function containsWord(sentence, targetWord){

    let arr = sentence.split(" ");

    for(i = 0; i < arr.length; i++){

       let palabras = arr[i]

       if(palabras.toLowerCase() === targetWord.toLowerCase()){

           return true;
       }
    }return false;
  }





  console.log(containsWord('sounds like a plan', 'like')); // true
  console.log(containsWord('They are great', 'they')); // true
  console.log(containsWord('caterpillars are great animals', 'cat')); // false
  console.log(containsWord('Cast the net', 'internet')); // false
