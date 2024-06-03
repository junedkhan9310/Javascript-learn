//singleton

const tinderUser = new Object()
// const tinderUser= {}   //tis is non-singleton object

tinderUser.id="1234v"
tinderUser.age = 32
tinderUser.name="arvan"
tinderUser.islogged= false

// console.log(tinderUser);

const regularuser ={
    email:"sum@gmail.com",
    fullname :{
        usefull_name:{
            firaname: "juned",
            lastname : "khan"
        }

    }
}
// console.log(regularuser.fullname.usefull_name.lastname);

const obj1 = {
    age :2,
    se:3,
    te:42
}
const obj2 ={
    a:2,
    b:32,
    c:43
}
const obj4 ={
    fd:2,
    f:32,
    qw:43
}

// const obj3 = Object.assign({},obj1,obj2,obj4) //without {} all values will be store in obj1
// console.log(obj3);


//we don't use assign we use

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); //gives value to key in array format so we can store it somewhere
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

//*****************destructing */

const course = {
    name: "nijif",
    fees:999,
    instructor : "juned"
}

//we can simply want to use this so we'll simply write course.fees but we jave one more way for doing if we want to do it again and again

// const {fees}=course; //we can also rename it 
// console.log(fees);

const {fees:fe}=course;
console.log(fe);















