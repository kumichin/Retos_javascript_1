
/*
número entero, por convención mayor que uno, que solo es divisible por sí mismo y por la unidad; por ejemplo, 5, 7, etcétera.
*/

//la siguiente función te dice si el numero introducido es un numero primo o no

function esPrimo(n){
    for (let i = 2; i < n; i++) {
        if (n % i === 0 ){
        return "no es primo"
    }else{
        return "es primo"
    }
    }
        
    }

console.log(esPrimo(16))