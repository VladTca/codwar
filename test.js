function validateUsr(username) {
// let arr = (a-z);
 //if ((username.toString().length < 17) && (username.toString().length >3)){

 const res =/\w{4,16}/
 /**
  * regex here/.test(username)
  */
 console.log(res.test(username));
 return res.test(username);
}

validateUsr('asagt')
/*
\w  или [[:word:]]  Буквенный или цифровой символ или знак подчёркивания
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/