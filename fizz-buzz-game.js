let contar;

// juego de fizz, buzz, fizzbuzz.
// consiste en que el programa comienza a contar del 0 al 100.
// si encuentra un multiplo de 3 imprime fizz, si es multiplo de 5 imprime buzz.
//si encuentra un numero que sea multiplo de 3 y de 5 imprime fizzbuzz

for (let i = 0; i <= 100; i++) {
contar =+ i;

if(contar % 3 == 0 && contar % 5 == 0){
    console.log ('fizzbuzz');
}else if(contar % 3 == 0) {
    console.log('fizz');
}else if(contar % 5 == 0){
    console.log('buzz');
}else{
    console.log(contar);
}

}

 

