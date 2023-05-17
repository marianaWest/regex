// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

let myString = "Eleanor Roosevelt";
let myRegex = /(Frank|Elanor).* Roosevelt/;
let result = myRegex.test(myString);
