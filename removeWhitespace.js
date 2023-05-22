// to remove white space in the beginning and end of word

let string = " hello ";
let wsRegex = /^\s+|\s+$/g;
let result = string.replace(wsRegex, "");

// instead of using string.trim();