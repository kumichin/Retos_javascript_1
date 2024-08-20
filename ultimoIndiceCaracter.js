
/*
Escriba una función lastIndexque acepte una cadena y un carácter.
La función debe devolver el último índice en el que se puede encontrar el carácter
 en la cadena.
*/

//metodo con lastIndexOf()

function lastIndex(str, char) {
    // your code here
   let pos =  str.lastIndexOf(char);
    return pos;
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7


//metodo sin lastIndexOf()
//en este metodo se empieza el bucle for reverso para empezar a contar desde el final. la primera posicion en este caso es la ultima
function lastIndex(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char) {
            return i;
        }
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
