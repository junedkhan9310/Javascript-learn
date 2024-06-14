//creating promises

const promise_1 = new Promise(function(resolve,reject){
    //do an async task
    //DB calls,Cryptography,network used for
    setTimeout(() => {
        console.log('async task is complete');
        resolve()
    }, 1000);
})


promise_1.then(function(){
    console.log('promise consumed');
})


// //making both together

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("async and reolved");
})


// //pasing value from peomise 3 function to .then cause it'll return data fro netowkr or server or database


const promise_3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"juned", email:"june@kjw.com"})
    },1000)
})
promise_3.then(function(user){
    console.log(user);
})


const promise_4= new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error= false;

        if(!error){
            resolve({username:"kj",useremail:"kjw@gmail.com"})
        }
        else {
            reject('eroor404')      //here we use reject keyowrk
        }
    },1000)   
})


promise_4.then((user)=>{
    console.log(user);
    return(user.username)
}).then((username)=>{
    console.log(username);
}).catch(function(err){ //we use .catchcause we used reject above
    console.log(err);
}).finally(()=>{  //finally is usesd as completetion of promise whtere it's rejected or resolved
    console.log("given completed");
})

const promise_5= new Promise((resolve,reject)=>{
setTimeout(()=>{
            let error= true;
    
            if(!error){
                resolve({username:"kj",useremail:"kjw@gmail.com"})
            }
            else {
                reject('eroor404') 
            }
            },1000)  
})

async function consumepromise5(){  //this is another way of writing but with async function there's a problem that you can't give catch directly to this so we use try catch to hadnle error
    const response = await promise_5 
    console.log(response);
}



async function consumepromise5(){  //this is another way of writing but with async function there's a problem that you can't give catch directly to this so we use try catch to hadnle error
    try {
        const response = await promise_5 
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
    }
consumepromise5()
//we can use both syntax of .then and . catch and also this async



//now we're trying with real time data  

// async function getallusers(){
//     try {
//         const response= await fetch('https://api.github.com/users/junedkhan9310')
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("e:-", error);
//     }
// }

// getallusers()

//now let's try .then adn .catch format

fetch('https://api.github.com/users/junedkhan9310')
.then((resp)=>{
    return resp.json()
})
.then((value)=>{
    console.log(value);
})
.catch((err)=>{console.log(err);})




























































