
/*
// Escribe una función `repeatingTranslate` que acepte una oración como argumento.
// La función debe traducir la oración de acuerdo con las siguientes reglas:
//
// - las palabras que tienen menos de 3 caracteres no se modifican
// - las palabras de 3 caracteres o más se traducen según el
// siguientes reglas:
// - si la palabra termina en vocal, simplemente repite la palabra dos veces (ejemplo:
// 'me gusta'->'me gusta')
// - si la palabra termina en una no vocal, repite todas las letras que vienen después de la
// última vocal de la palabra, incluida la última vocal misma (ejemplo:
// 'basura'->'basura')
//
// Tenga en cuenta que si las palabras están en mayúscula en la oración original, deben permanecer
// en mayúscula en la oración traducida. Las vocales son las letras a, e, i, o, u.
//
// ¿Puedes reducir el problema a funciones auxiliares?
*/

let repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(translateWord(word));
        }
    }
    return newWords.join(' ');
};


let translateWord = function(word) {
    let vowels = 'aeiou';
    let lastChar = word[word.length - 1];
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
        i--;
    }
};

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
