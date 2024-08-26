
/*
Escriba una función pairProductque acepte una matriz de números y un
producto como argumentos. La función debe devolver un valor booleano que
indique si un par de elementos distintos de la matriz dan como resultado el
producto cuando se multiplican entre sí.
Puede suponer que la matriz de entrada contiene elementos únicos.
*/

// your code here
function pairProduct(arr, product){
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if((arr[i] * arr[j]) === product){
                return true;
            }
        }
    }return false;
}



console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false
