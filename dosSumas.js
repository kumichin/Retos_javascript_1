
/*
Escriba una función twoSum(arr, target)que acepte una matriz y un número de
destino como argumentos. La función debe devolver un valor booleano que indique
si dos números distintos de la matriz suman el targetvalor.
Puede suponer que la matriz de entrada contiene solo números únicos.
*/

// your code here
function twoSum(arr, target){
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if( (arr[i] + arr[j]) === target ){
               return true;

            }
        }
    }return false
}





console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
