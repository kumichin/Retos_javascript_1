function pigLatinWord(word) {
    // your code here...
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = word.match(consonantRegex);
    return myConsonants !== null
      ? word
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : word.concat("yay");
  };

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
