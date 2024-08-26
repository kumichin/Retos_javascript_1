
/*
Escriba una función maxInMatrix(matrix)que tome una matriz bidimensional y
devuelva el valor más grande de la matriz. La matriz contiene al menos un valor.
*/

//METODO 1:

function maxInMatrix(matrix) {
    // your code here...
    let max = 0;
    for (i = 0; i < matrix.length; i++){
        let arr = matrix[i];
        for (j = 0; j < arr.length; j++){
            if( arr[j] > max){
                max = arr[j];

            }

        }
    }return max;
  }


  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72



  //METODO 2:

  function maxInMatrix(matrix) {
    let currentMax = -Infinity;
    for (let row = 0 ; row < matrix.length ; row++) {
      for (let col = 0 ; col < matrix[0].length ; col++) {
        if (matrix[row][col] > currentMax) {
          currentMax = matrix[row][col];
        }
      }
    }
    return currentMax;
  }

  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72
