
/*
Escriba una función twoDimensionalSum(arr)que tome una matriz 2D de números y
devuelva la suma total de todos los números
*/

// your code here
function twoDimensionalSum(arr){
    let suma = 0;
    for( i = 0; i < arr.length; i++){
        let submatriz = arr[i];
        for(j = 0; j < submatriz.length; j++){
            suma += submatriz[j];

        }
    }return suma;
}

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
