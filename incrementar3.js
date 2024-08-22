/*
Escriba una función threeIncreasingque
acepte una matriz de números como argumento.
La función debe devolver un valor booleano que indique si la matriz contiene
 o no tres números consecutivos en orden creciente, como 7, 8, 9.
*/

let threeIncreasing = function(nums) {
    for (let i = 0; i < nums.length -2; i++) {
        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
            return true;
        }
    }
    return false
};


console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
