const myArray=[1,2,3,4,5,6,7,8,9,0]// array in js is resiziable and can store multiple type of dtat type in single variable
//copies made in js of array create shallow copies not depth copies
const myHero=new Array("spiderman","batman","superman","ironman")

myArray.pop()
myArray.push(10)

//myArray.unshift(9)
//myArray.shift()

// console.log(myArray);
// console.log(myHero);

// console.log(myArray.includes(9));// find weather the given number is present in the array or not
// console.log(myArray.indexOf(6));// position of the value in array

const newArray=myArray.join()//convert the array into the string 
// console.log(newArray);
// console.log(typeof newArray);//string

// slice, splice

// console.log(`option A ${myArray}`);
const part1=myArray.slice(1,3)
const part2=myArray.splice(1,3)
// console.log(`option B hereit conatin slice= ${part1} & splice ${part2} and than the original array is ${myArray}`);
// slice copy hte value from the mani  array and  // it does not modify the original array
//splice remove the elements and then store it away from the main array// it modify the original array



//********************************** | ARRAY | ********************************//


const marvel_hero=["ironman","spiderman","hulk","captain ameriaca"]
const dc_hero=["superman","batman","flash"]

// marvel_hero.push(dc_hero)// it will hold a dc_hero as an element at the end || it push the arry in the existing array
// console.log(marvel_hero);

const all_hero=marvel_hero.concat(dc_hero)//it will merge the two arrays and craete a new arrya nd it will be store in a new array
console.log(all_hero);

const all_new_hero=[...marvel_hero, ...dc_hero]//sprad operator
console.log(all_new_hero);

const sampleArray=[1,2,3,[4,5,6],7,[8,[9,10]]]
const sampleArray2=sampleArray.flat(Infinity)// make a single levcel array insted of of muti depth array || here infinity indicate the depth of the array

console.log(sampleArray2);

console.log(Array.isArray("PIYUSH"));//CHECK WEATHER IT IS ARRAY OR NOT
console.log(Array.from("PIYUSH"));// CONVERT IT INTO ARRAY
console.log(Array.from({names: "PIYUSH"}));


let vale1=100
let value2=200
let value3=300

console.log(Array.of(value2,vale1,value3));// '.of' make the arry with a set of input || rather than a single input like '.from'