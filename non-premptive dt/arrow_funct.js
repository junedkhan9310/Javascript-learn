
const user = {
    username : "juned",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome`);
        // console.log(this);

    }
}

// user.welcomemessage()
// user.username= "sam"
// user.welcomemessage()

// console.log(this);

// const chai = function(){
//     let name= "juned"
//     console.log(name);
// }

//another way
//Arrow declaration
const chai = ()=> {
    let name = "juned"
    console.log(this);
}

// chai()


//immediately invoked function expression (IIFE)
// in above example when we add '()' after function name it executes in so in IIFE we want to immediately execute it
// so we add this after function itself 

(function chai(){ // named iffe
    console.log("hi");
})();  // we should always end with ';'



(()=> { //unamed iffe
    console.log("another");
})();



//so if a function accepting a input 



((num1,num2)=> {
    console.log(num1+num2);
})(2,3)









 














