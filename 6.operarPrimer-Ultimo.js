
/*
Escriba una función firstAndLastque tome una matriz de números
y devuelva la suma del primer y el último elemento si hay un número par
de elementos en la matriz. Si hay un número impar de elementos en la matriz,
la función debe devolver la diferencia entre el primer y el último elemento de
la matriz.
*/

// Your code here
function firstAndLast(array){
    if(array.length % 2 === 0){
        let sum = array[0] + array[array.length-1]
        return sum
    }else{
        let resta = array[0]- array[array.length-1]
        return resta
    }
}


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
