
/*
En matemáticas, la sucesión o serie de Fibonacci hace referencia a la secuencia ordenada de números descrita por Leonardo de Pisa, matemático italiano del siglo XIII:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…

A cada uno de los elementos de la serie se le conoce con el nombre de número de Fibonacci.

Se calcula cada numero como resultado de la suma de sus 2 numeros anteriores, de manera que la secuencia seria así:
0,
1,
1, resultado de 1 + 0
2,  resultado de 1 + 1
3,  resultado de 2 + 1
5,  resultado de 3 + 2
...
*/

//función que devuelve el numero fibonacci según la posicion numerica ue pido, n es la posición en la serie Fibonacci

function fib(numero){
let numero1 = 1;
let numero2 = 1; 

for (let i = 3; i < numero; i++) {
    
    numero3 = numero1 + numero2;
    numero1 = numero2;
    numero2 = numero3;
}
return numero2;
}

console.log(fib(8));