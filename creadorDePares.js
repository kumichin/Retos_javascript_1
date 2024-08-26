
/*
Escriba una función pairsMaker(arr)que tome una matriz como argumento.
La función debe devolver una matriz 2D donde las submatrices representan pares
únicos de elementos de la matriz de entrada.
*/

// your code here
function pairsMaker(arr){
    let pares = [];

    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
           let par = [ arr[i], arr[j] ]
          pares.push(par)
        }
}return pares;
}





console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
