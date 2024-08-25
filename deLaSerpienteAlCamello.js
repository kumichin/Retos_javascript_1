
/*
Escriba una función snakeToCamelque tome una cadena en formato snake_cased y
devuelva una versión en formato PascalCase de la cadena. snake_case es donde cada
palabra está separada por guiones bajos ( _). PascalCase es una cadena donde el
primer carácter de cada palabra está en mayúscula y todos los demás caracteres en
minúscula.
*/


// Your code here
function snakeToCamel(sentence){
    let arr = sentence.split("_");
    let iniciales = []
    for(i = 0; i < arr.length; i++){
        let inicial = arr[i];
        let nuevaPalabra = inicial[0].toUpperCase() + inicial.slice(1).toLowerCase();
        iniciales.push(nuevaPalabra)
    }return iniciales.join("")
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
