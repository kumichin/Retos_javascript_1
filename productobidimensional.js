
/*
Escriba una función twoDimensionalProduct(array)que tome una matriz de números
en 2D como argumento. La función debe devolver el producto total de todos los
números multiplicados entre sí.
*/

// your code here
function twoDimensionalProduct(array){
    let producto = 1;
    for(i = 0; i < array.length; i++){
        let subArr = array[i];
        for(j = 0; j < subArr.length; j++){
            producto *= subArr[j]
        }
    }return producto;
}




let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
