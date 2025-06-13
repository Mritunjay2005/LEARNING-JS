const score= 500;
// console.log(score);

const balance =new Number(100);
// console.log(balance);

console.log(balance.toString().length);
// console.log(balance.toFixed(2));// generally used in price tag 

const otherNumber=23.6789
const otherNumber1=123.6789
const otherNumber2=1123.6789

// console.log(otherNumber.toPrecision(3));//23.7
// console.log(otherNumber1.toPrecision(3));//124
// console.log(otherNumber2.toPrecision(3));//1.12e+3

const hundreds=1000000000
// console.log(hundreds.toLocaleString('en-In'));

//********************************** MATHS**********************************//

console.log(Math)//Object [Math] {}
console.log(Math.abs(-4.4));
console.log(Math.floor(-4.4));
console.log(Math.ceil(-4.4));
console.log(Math.round(-4.5));
console.log(Math.min(4,3,5,2,6,1));
console.log(Math.max(4,3,5,2,6,1));

console.log(Math.random());

console.log(Math.floor((Math.random()*10)+1));// floor will ghive the min value of random no. generated 

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+10));
// generasted value is been multipied with the ran of value which i need and
// then minimum value added so that the final output is not less than minimum value