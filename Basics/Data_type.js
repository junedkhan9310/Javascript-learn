//7 type: string, number,boolean,null,undefined,symbols,BIgint(premptive)

const score=100 //number
const scoreval= 100.3 //also number

const inloggedin = true //boolean
const outsidetemp = null //nul
let useremail //undefined

const id = Symbol('123')
const anotherid = Symbol('123')


console.log(id==anotherid); //although value is same but inside symbol it's not

//refrence type(non-premptive)

// Array,Objects,Functions

const heroes = ["saktiman","nagraj", "spiderman"]; //array

let myobj={
    name: "juned",
    age : 22,
}//object

const myfunction=function(){
    console.log("Hello")

}

console.log(typeof(myfunction))//sare non premptive data type ka dt object hi bola jata hai
console.log(typeof(myobj))

console.log(typeof(heroes))

















