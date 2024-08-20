
/*
Escriba una función hasThreeVowelsque acepte una cadena como argumento.
 La función debe devolver un valor booleano que indique
 si la cadena contiene al menos tres vocales diferentes.
*/


function hasThreeVowels(str){
    //detectar vocales
    //detectar si las vocales son iguales o no
    //contar solo las vocales que son diferentes
    //devolver el valor del conteo
  let vowels = "aeiou";
    let newArray = []
    for( let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            newArray.push(str[i]);
        }

    }
    let uniqueArray = new Set(newArray); //set es una estructura de datos que hace que uniqueArray no
                                           //tenga elementos repetidos, no los permite y de esa mamera se puede comprobar mejor si hay diferentes o no
    if(uniqueArray.size >= 3){
        return true;
    } else {
        return false;
    }
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
