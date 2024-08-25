
/*
Escriba una función consonantCancelque tome una oración y devuelva una nueva
oración donde cada palabra comience con su primera vocal.
*/

function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let newWords = words.map(word => removeFirstConsonants(word));
    return newWords.join(" ");
}

function removeFirstConsonants(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return word.slice(i);
        }
    }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
