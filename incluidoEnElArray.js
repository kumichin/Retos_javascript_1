/*
Escriba una función myIncludes(arr, target)
que acepte una matriz y un valor de destino como argumentos.
La función debe devolver un valor booleano que indique
si el destino se encuentra en la matriz. Resuelva esto sin Array.includeso
Array.indexOf
*/

// your code here
function myIncludes(arr, target){
    if(arr.includes(target)){
        return true;
    }else{
        return false

    }

}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
