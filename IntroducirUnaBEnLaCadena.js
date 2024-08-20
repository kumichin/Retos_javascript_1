
/*
Escriba una función sillyStringque acepte una palabra como argumento.
 Las funciones deben devolver una nueva palabra donde cada vocal de la
 palabra original esté seguida por 'b' y
esa misma vocal. Por ejemplo, 'siren' se convertiría en 'sibireben'.
*/

function sillyString(word){
    //encontrar una vocal, acceder al indice
    //anteponerle una b + la vocal poner una b mas el indice actual
    //devolver la nueva palabra
    let newStr = "";
    let vocales = "aeiou";
    for(let i = 0; i<word.length; i++){
        let char = word[i];
        if(vocales.includes(char)){
         newStr += char + "b" + char;
        }else{
            newStr += char;
  }

}return newStr;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
