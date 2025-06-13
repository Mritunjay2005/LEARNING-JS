
// singleton => objetc cretaed witha constructer and is one of its kind || unique
//Object.craete 

//object leterals 

const mySym=Symbol("key1")

const myUser = {
 name:"piyush",
 age:18,
 //mySym: "key value 1",//typeof string
 [mySym]: "key value 1",// this is teh methode of using a symbole 
 location: "tatanagar",
 isLoggedIn: false,
 email:"tobi.1.6.0.uchia@gmail.com",
 lastDateLoggedIn: ["monday","wednesday","friday"],
 "date of birth":"10 feb 2007"
}
// console.log(myUser.email);
// console.log(myUser["email"]);//here we need to difine key as an string 
// console.log(myUser["date of birth"]);// this type of data can only be diclared through this methode
// console.log(typeof myUser[mySym])

myUser.name ="raju"//rewrite in object
//Object.freeze(myUser)//freeze the objetc so it can not be rewritten
myUser.name ="raju bhai"
// console.log(myUser)

myUser.greeetings= function(){
    console.group("hola senorita");
}
myUser.greeetings1= function(){
    console.group(`hola senorita , this side ${this.name}`);// reffer to the nmae from thr same object using 'this.'
}

// console.log(myUser.greeetings);// return reffernce to an function
// console.log(myUser.greeetings());// return the value stored in the function
// console.log(myUser["greeetings"]);// return reffernce to an function
// console.log(myUser.greeetings1);// return reffernce to an function
// console.log(myUser.greeetings1());// return the value stored in the function
// console.log(myUser["greeetings1"]);// return reffernce to an function

//********************************************* OBJECTS 2 ********************************************//

const tinderUser= new Object()//singelton object
// const tinderUser= {}//non singelton object

tinderUser.id = "12345"
tinderUser.name = "sourav"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser ={
    email :"rajubhau@gmail.com",
    name :{
        userName:"mritunjay2006",
        fullName: {
            first_name:"mritunjay",
            last_name:"tiwari",
        }
    }
}

console.log(regularUser);//useing the whole object
console.log(regularUser.name.fullName.first_name);

const obj1={1:2,3:4}
const obj2={1:2,3:4}
const obj4={4:2,5:4}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)// {}=> this the target || obj1,obj2 => are the source
// const obj3=Object.assign(obj1,obj2,obj4)//  if we don't use {}  then what ever will be the first object wil be assigned as a targent then all the data will be transfered and the object will be modified

const obj3={...obj1, ...obj2, ...obj4}// then the first object will not be modified even if we don't use {}
console.log(obj3);// combined and modified object
console.log(obj1);// modified orinal object

const user =[
    {
        id: "1",
        email:"piyush@gmail.com",
    },
    {
        id: "2",
        email:"piyush@gmail.com",
    },
    {
        id: "3",
        email:"piyush@gmail.com",
    },
    {
        id: "4",
        email:"piyush@gmail.com",
    },
    {
        id: "5",
        email:"piyush@gmail.com",
    },
]


//console.log(user[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));// only keys
console.log(Object.values(tinderUser));// only values
console.log(Object.entries(tinderUser));//print everything in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//check weather isLoggedIn is present in tinderUder object


//*********************************************** OBJECTS 3 ********************************************//

const course ={
     name:"gpt.4.o",
     cost:"488",
     courseInstructur: "papu don"
}
const {courseInstructur: instructure}=course//destructure the object ||easy to handle 

console.log(instructure);