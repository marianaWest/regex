// check if password has between 3 and 6 characters and at least one number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
