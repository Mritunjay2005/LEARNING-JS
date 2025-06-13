/*
let score =33

console.log(typeof score); // => number
console.log(typeof (score)); // as amethode => number
*/

let score ="33abc";

console.log(typeof score); //=> string
console.log(typeof (score));// as amethode => string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); // => number
console.log(valueInNumber);// NaN

// conversion to    i   nteger
// "33" => 33
// "33abc"=> NaN
// true => 1; false=>0;


let isLoggedIn = 1

let boolenisLoggedIn = Boolean(isLoggedIn)
console.log(boolenisLoggedIn)

// conversion to boolean 
// 1=> true; 0=> false
// "" => false
// "piyush" => true


// ********************************OPERATOR******************************** //

let value=3;
console.log(value);

 let negvalue=-value
 console.log(negvalue);

// console.log(2+3); addition
// console.log(2-3); subtraction
// console.log(2/3); questiant
// console.log(2%3); remainder
// console.log(2*3); multiply
// console.log(2**3); power

let str1 ="hi"
let str2 =" piyush"
let str3=str1+str2;
console.log(str3);
console.log("1" + 2 );
console.log(1 + "2" );
console.log("1" + 2 + 2);// from left ro right first we get the string so the rest are treated as string tha's why the out is => 122 
console.log(1 + 2 + "2");// from left to right first we got the conversion and then the string that why the output was => 32
-console.log(+true);//=> 1 ;converswon to integer      ||  true+ => not possible 
console.log(+"");//=> 0 ;converswon to integer

// let counter=1;// value store 
// ++counter;// increment happed
// console.log(counter);// then the printing happens


let counter=1;// value store 
console.log(++counter);// then the printing happens


// ********************************COMPARISION******************************** //

// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


console.log(null>0);// fasle
console.log(null>=0); // false
console.log(null==0);// true



console.log(undefined>0);// fasle
console.log(undefined>=0); // false
console.log(undefined==0);// fasle

console.log("2" === 2);// false


// *************************DATA TYPES*****************************  //
        //  7 DATA Types
        //  String
        //  Integer
        //  Boolean
        //  null
        //  undefined
        //  Symbol
        //  BigInt
        //  Reference(non primitive)- ARRAY OBJECT FUNCTION
const hero=["piyush ", "swapnil","yathart"];

let muObj={
    name :"rocky",
    age: 27,
}

let myfunction =function(){
    console.log("hello world");
}


// ***********************MEMORY********************//
//Stack( primitive ) || heap(non-primitive)

let userOne={
    email: "piyush@gmail.com",
    uid:"piyush@oksbi",
}
let userTwo = userOne

userTwo.email="mitun@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
