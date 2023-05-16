// match only the letter a appearing between 3 and 5 times in a string

let A4 = "aaaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
// returns true
multipleA.test(A2);
// returns false
