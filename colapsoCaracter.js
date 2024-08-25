
/*
Escriba una función sameCharCollapseque tome una cadena y devuelva una versión
colapsada de la cadena. Para colapsar la cadena, eliminamos repetidamente 2
caracteres adyacentes que sean iguales hasta que no haya caracteres adyacentes.
Si hay varios pares que se pueden colapsar, elimine el par más a la izquierda.
Por ejemplo, realizamos los siguientes pasos para colapsar
"zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

function sameCharCollapse(str) {
    let reducible = true;

    while (reducible) {
        let chars = str.split("");
        reducible = false;

        for (let i = 0; i < chars.length - 1; i++) {
            if (chars[i] == chars[i+1]) {
                chars[i] = "";
                chars[i + 1] = "";
                reducible = true;
            }
        }
        str = chars.join("");
    }
    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
