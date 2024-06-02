const { all } = require("axios");

const dc_hero = ["supeman","batman","flash"]
const mar_hero = ["iron","cpatain","thor"]

// const all_hoes = dc_hero+mar_hero //string ki tarah add kardia
// const all_hero = dc_hero.concat(mar_hero) 
// console.log(all_hero);

//we usually don't use concat but spread

// const all_heor = [...mar_hero,...dc_hero] //if tere's anther array we could've added also by ...

// console.log(all_heor);

const ints_arr= [1,2,3,[2,3,4],8,7,[2324,23,[23,3]]]

const real_us_arr= ints_arr.flat(Infinity)

// console.log(real_us_arr);

let b= Array.from("junedkhan")

console.log(b);
console.log(Array.isArray(b))


let score1 = 200
let score2 = 3445
let score3 = 5000

console.log(Array.of(score1,score2,score3));













