const myDate =new Date()

console.log(myDate);
console.log(myDate.toDateString());

const cerateDate = new Date(2020,5,18)
console.log(cerateDate.toDateString())

//jan = 0
//feb =1
//march = 2
// ...... dec = 11

// input => year, month, date
// output => day, month,date, year


// let timeStamp=Date.now()// current millisecond
// console.log(timeStamp);
// console.log(cerateDate.getTime());// milisecond of that instance
// console.log(Math.floor(cerateDate.getTime())/1000);// give rounded value in sec.

// console.log(Math.floor(cerateDate.getMonth()));
// console.log(cerateDate.getDay());

cerateDate.toLocaleString('default',
    {
        weekday:'long'
    }
)