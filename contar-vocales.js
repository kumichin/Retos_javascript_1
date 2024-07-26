
/*
Función para contar las vocales que tiene una cadena, para hacerlo más sencillo se una una expresión regular (regex)
*/


function countVowels(word) {
    // your code here...
    let resultado = word.replace(/[^aeiou]/g, "") //con esta expreseion regular estamos quitando todas las consonantes porle le decimos que quite todos menos las vocales
    let elementos = resultado.length; // con esto hayamos la longitud de la palabra solo con vocales ( asi sabemos cuantas vocales tiene)
    return elementos;
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2