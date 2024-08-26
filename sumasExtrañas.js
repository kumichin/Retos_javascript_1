
/*
Escriba una función strangeSums que acepte una matriz de números como argumento.
El método debe devolver un recuento de la cantidad de pares distintos de
elementos cuya suma sea cero.
Puede suponer que la matriz de entrada contiene elementos únicos.
*/

// your code here
function strangeSums(arr){
    let count = 0;
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if( arr[i] + arr[j] === 0 ){
                count++
            }
        }
    }return count;
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
