function abbreviate(word){
    let consonantRegex = /[aeiou]+/gi;
 let sustituto = word.replace(consonantRegex, "");

 return sustituto;

 }






 console.log(abbreviate('wonderful')); // 'wndrfl'
 console.log(abbreviate('mystery')); // 'mystry'
 console.log(abbreviate('Accordian')); // 'ccrdn'
