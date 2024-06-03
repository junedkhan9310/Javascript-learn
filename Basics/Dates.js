let mydate = new Date()

// console.log(mydate.toString());
//tostring to date called methods
// console.log(mydate.toDateString())

// console.log(mydate.toISOString());


// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());

// console.log(typeof(mydate))

let anotherdate = new Date(2004,11,15)
// let anotherdate = new Date(2004,11,15,5,3)
// let anotherdate = new Date("2023-01-12") //yy-dd-mm
// let anotherdate = new Date("01-12-2023") //dd-mm-yy

// console.log(anotherdate.toLocaleString());


let mystamp = Date.now()  //.now will give time in miliseconds 
// console.log(mystamp); 

// console.log(anotherdate.getTime()); //getting time of this laso in milisecond so we can compare

// console.log(Math.floor(Date.now()/1000)); //conerting to seconds and getting floor value without decimel 

let newdate = new Date()
// console.log(newdate.getDay());

// console.log(newdate.getMonth()+1);

// now string to write in prinitng like we use %d in c 

console.log(`the time is ${newdate.toLocaleTimeString()}`);

let  bank = "SBI"

console.log(`my bank is ${bank}`);


newdate.toLocaleString('defaualt',{ 
    weekday : "long",//press sctr+space to get infor
    dayPeriod : "short"
})

console.log(newdate);












