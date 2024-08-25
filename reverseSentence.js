
/*
Escriba una función reverseSentence(sentence)que tome una oración como argumento.
La función debe devolver una nueva oración en la que se invierta el orden de las
palabras. Tenga en cuenta que debe invertir el orden entre las palabras, no el orden
 entre los caracteres.
*/

//METODO 1:

function reverseSentence(sentence){

    let array = sentence.split(" ");

       let alreves = array.reverse();
       let frase = alreves.join(" ");
       return frase;

    }

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'



//METODO 2:

let reverseSentence = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        newWords.push(words[i]);
    }

    let newSentence = newWords.join(' ');
    return newSentence;
};

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
