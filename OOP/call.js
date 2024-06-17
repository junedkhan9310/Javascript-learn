function setUsername(username){
    
    this.username= username
    console.log('called');
}

function myUsers(username,logingcount,isloggedin){
    setUsername.call(this,username) //we want to acces another function in this but when we do another is called but after execution execution context delete and even value
    //so we call it by .call and give the funtion 'this,' so that it uses this of myuser instead of setusername in  this.username= username
    
    this.logingcount= logingcount;
    this.isloggedin= isloggedin;

      
};


const chai = new myUsers('chi','yes','ye')

console.log(chai);

















