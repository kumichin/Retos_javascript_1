function pigLatinWord(word){
    //definir la variable vocales
    //deterinar si la primera letra es una vocal
        //si lo es devover la palabra con yay
    //interar si encuentro una vocal
        //tomar todas las consonantes antes de la letra actual (que sera una vocal)
        //incluir esa consonante al final de la palabra
        //añadir "ay" y entonces devolver la palabra

    let vowels = "aeiou";
    if(vowels.includes(word[0])){
        return word + "yay";
    }
    for(let index = 0; index <word.length; index++){
        let letter = word[index];
        if(vowels.includes(letter)){
            let firstPart = word.slice(index);
            let secondPart = word.slice(0, index)
            return firstPart + secondPart + "ay"
        }
    }return word;
}
