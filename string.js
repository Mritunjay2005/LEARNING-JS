const name="piyush";
const number= 50;

console.log(name+" "+number+" got");

console.log(`Hello my name is ${name} and my repo count is ${number}`);

const gameName = new String('rajak')

console.log(gameName[0]);// r
console.log(gameName.__proto__);//{}

console.log(gameName.length);// 5
console.log(gameName.toUpperCase());// RAJAK

console.log(gameName.charAt(2));// j 
console.log(gameName.indexOf('k'));// 4

const newString= gameName.substring(0,2);//ra
console.log(newString);

const anotherString= gameName.slice(-4,2);//a
console.log(anotherString);

const spaceString="   piyush tiwari     "
console.log(spaceString);
console.log(spaceString.trim());//trim the sapce from front and rear


const url="https//mritunjay%20cloud_hustler.com"
console.log(url.replace('%20','_'));

const seprateVariable = "hello-world-here-is-papu"
console.log(seprateVariable.split('-'));