
const accountId=1445
let accountEmail="test@gmail.com"
var accountPassword ="1234"
accountCity='jaipur'

//accountIs=2// not allowed
//accountEmail="test#gmail.com"//allowed
//accountPassword="98765"//allowed
//accountCity='ujjain'//allowed
console.log(accountCity);

let accountState;
/*
do not use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])