//everything is after ES6

// class user{
//     constructor(username,email,password){
//         this.username= username; 
//         this.email= email;
//         this.password= password;
//     }
//     encryptpassword(){
//             return `${this.password} abcd`
//     }
//     cpatialuser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chia",'chai@MeshGouraudMaterial.com', 7869)

// // console.log(chai.encryptpassword());
// console.log(chai.cpatialuser());

//**************************8now we'll use inheritance concepts with classes*************************//

class user{
    constructor(username){
        this.username= username;
    }
    login(){
        console.log(`username is ${this.username}`);
    }
}


class teacher extends user{   //we use extends to make it child class of user
    constructor(username,email,password){
        super(username) //this super allow it to acces function of his superclass that we extended
        this.email= email;
        this.password= password

    }
    addcourse(){
        console.log(`new course added by ${this.username}`)
    }
}
const chai = new teacher('juned','juned@google.com','123')
chai.addcourse()

const coldtea= new user('myname')


coldtea.login()
chai.login()











































