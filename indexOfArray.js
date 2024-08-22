
/*
Escriba una función myIndexOf(arr, target)
que tome una matriz y un valor objetivo como argumentos.
La función debe devolver el primer índice en el que se encuentra el objetivo
en la matriz. Si no se encuentra el objetivo, debe devolver
-1. Resuelva esto sin usar Array.indexOf.
*/

// your code here
function myIndexOf(arr, target){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }return -1;
}






console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
