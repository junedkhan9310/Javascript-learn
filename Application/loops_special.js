//***************************for of***********************//


// ["","",""]
// [{},{},{}]

const arr = [1,2,3,14,235]

for (const number of arr) {
    // console.log(number);
}

const phone = "Samsung Galaxy S23"

for (const name of phone) {
    if(name==" ")
        continue
    else {
        // console.log(name);
}}


//Maps (somewhat same as array)

const map = new Map

map.set('400102',"jogeswari")
map.set("400057","Andheri")
map.set("400065","CSMT")

// console.log(map);

//we can access this with forof loop

for (const [pincodde,area] of map) {
    // console.log(`${pincodde}:- ${area}`);
}

// const myobj= {
//     'game':'pubg',
//     'game2':"COD",
//     'game3':'COC'
// } 
// for (const iterator of myobj) {
//  console.log(iterator);   
// }


//***************************Now for objects we usually use "For in"***********************//



const myobj= {
    game:'pubg',
    game2:"COD",
    game3:'COC'
} 

for (const key in myobj) {
    // console.log(key);
    // console.log(`${key} in my phone is ${myobj[key]}`);
}
//let's see if we can use arra in it


const programing =["c++","python","Java","C"]

for (const key in programing) {
    // console.log(key);//this prints index number
    // console.log(programing[key]);
}

//we can't use loop for map cause it's itteratable

//***************************for each***********************//

const coding =["js","ruby","java","c++","python"]

//we use for each mostly

coding.forEach(function(item){
    // console.log(item);
})

coding.forEach((item)=> { //just function is diffrent we use arrow decalration here
    // console.log(item);
})


coding.forEach( function(item){
    if(item == "js" || item== "c++"){
        // console.log("higher level lamg");
    }
    else{
        // console.log(item);
    }
} )


coding.forEach((item,number, arr)=> {
        // console.log(item,number,arr);
})


//***************************usign array and object combination***********************//


const EverOneRecord = [
    {
        name:"Juned",
        Language1: "C++",
        Language2:"Python"
    },
    {
        name:"Daniyal",
        Language1:"HTML",
        Language2:"CSS"
    },
    {
        name:"adbdul Hadi",
        Language1:"C",
        Language2:"Pyt"
    }
]
EverOneRecord.forEach( (item)=>{
    console.log(`name of student is ${item.name} and his best language is ${item.Language1}`);

})






























