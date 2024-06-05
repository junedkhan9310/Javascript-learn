//Singleton
 
//object literals (declaring obj)

const mysym = Symbol("key1"); //to use thi skey as symbol we'll werite in square bracket in object

const jsUSer = {
    name : "Juned",     //Key: value
    age : 20,
    [mysym] : " mykey",
    "full name ": "Khan juned",
    location : "mumbai",
    email: "kj@.com",
    isloggedin:true
}    


// console.log(jsUSer["email"]);

jsUSer.email = "kj@12.com"
// Object.freeze(jsUSer) //to freeze object
jsUSer.email = "kk@123.com"

// console.log(jsUSer);

jsUSer.greeting = function() { //adding function to a object
    console.log("hello bhhai");
}

jsUSer.greeting2 = function() { //adding function to a object
    console.log(`hello babi`, $(this.name));
}

console.log(jsUSer.greeting());
console.log(jsUSer.greeting2());








































