
/*
Escriba una función combineArray(array1,
array2)que tome dos matrices de números y devuelva las dos matrices combinadas
en una sola matriz.

Sugerencia : use el Array.concatmétodo pero tenga en cuenta que llamar a este
método no cambiará permanentemente, también conocido como mutate ,
ninguna de las matrices.
*/

function combineArray(array1, array2) {
    // your code here...
    let combinar = array1.concat(array2);
    return combinar
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
