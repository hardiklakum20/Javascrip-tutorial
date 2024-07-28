const accountId = 144553  //No change
let accountEmail = "hardiklakum80@gmail.com" 
var accountPassword = "123456"
accoutCity = "ahmedabad"
let accountState;

// accountId = 2 //Not allowed
accountEmail = "abc@gmail.com"
accountPassword = "32344"
accoutCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail,accountId,accountPassword,accoutCity,accountState]);