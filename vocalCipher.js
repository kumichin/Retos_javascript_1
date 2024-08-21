

/*
Escriba una función vowelCipherque tome una cadena y
devuelva una nueva cadena donde cada vocal se convierte en la siguiente vocal
del alfabeto.
*/

function vowelCipher(string) {
    const vowels = "aeiou";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char)) {
            let oldIdx = vowels.indexOf(char);
            let newIdx = oldIdx + 1;
            let newChar = vowels[newIdx % vowels.length];
            newString += newChar;
        } else {
            newString += char;
        }
    }
    return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
