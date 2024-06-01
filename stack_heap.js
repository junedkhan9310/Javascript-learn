"use strict";

let lastname = "Juned"

let myname = lastname;
// console.log(myname);

myname ="khan"

// console.log(lastname);
// console.log(myname);

let userOne = {
    name:"khan",
    age:"12",
}
let userTwo = userOne;// heap me same hi refrence milta hai 

console.log(userTwo);

userTwo.age = "14" //ek update kare to dusra bhi hoga
console.log(userTwo);
console.log(userOne);
