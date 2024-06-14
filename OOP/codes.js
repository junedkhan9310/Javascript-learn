// object literall

const user= {
    username: "juned",
    login:'3',
    email:"das",
    getuserdetail:function(){
        // console.log('ih')
        // console.log(`username is ${this.username}`);
        console.log(this);
    }
};

// user.getuserdetail()

//now if we want to make another object like this same structure so we'll create a strucutre function

// const promise_1= new Promise()
// const date = new Date()
//in both above example new is a contrutctor function

function myUsers(username,logingcount,isloggedin){
    this.username= username;
    this.logingcount= logingcount;
    this.isloggedin= isloggedin;

    return this  
};

const useorne = new myUsers('juned',23,true)
const user_2= new myUsers('kll',11,false)// if we don't use new keyword(constructor) value of myusers will be permanantly assign by this user 2 value and even userone will chamge
console.log(useorne.constructor); //this return refrence 
// console.log(user_2);


















