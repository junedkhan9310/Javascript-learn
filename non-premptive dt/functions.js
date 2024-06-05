
function sayname(){
    console.log("j");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("d");
}

// sayname()

// function addnum(number1,number2){
//     console.log(number1+number2)
// }

function addnum(number1,number2){
    let result = number1+number2;
    return result
}

let result= addnum(32,56)
// console.log(result);
// addnum(22,12)


function loginusermess(username){
    if(!username){ //equivalent to username===undefined
        console.log("please enter username");
        return ;
    }
    return `${username} just logged in`
}

console.log(loginusermess("juned"));

console.log(loginusermess());

//**********************function wit obj and arrray************** */

function calcu_cartprice(...num1){//agar bohot sari value pgi to
    return num1  //it'll return array of number

}


// console.log(calcu_cartprice(23,75,343,56,74));


//***************Now using object in function*******************//

const user={
    name: "juned",
    age :18

}

function userincompany(anybody){
    console.log(`name of user is ${anybody.name} and age is ${anybody.age}`)
}

// userincompany(user) we can also pass object directly
// userincompany({  //we can also pass object directly
//     name:"kjajoor",
//     age:78
// }) 

// userincompany({
//     name: "naed",
//     age : 232
// })



const myarray = [100,200,2300]

function arraname(arr){
    console.log(`second value of array is ${arr[1]}`);

}

arraname(myarray);//same we pass array directly without name arrname([100,200,2300])






























