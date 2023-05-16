// check if password has between 3 and 6 characters and at least one number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
