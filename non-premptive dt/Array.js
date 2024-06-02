const arr= [3,5 ,7,3,2, 5,4,2,]

// for(let i =10;i<20;i++){
//     let k=0
//     arr[k]=i
//     k++
// }

// console.log(arr['4']);

// console.log(arr[2]);

//methods

arr.push(6)
arr.push(45)
arr.pop()//remove last val
arr.unshift(98) //shift first val shift to ther ight all the value so it's extreme
arr.shift()

// console.log(arr.includes(6));
// console.log(arr.indexOf(6));
const newarr = arr.join()
// console.log(typeof(arr))
// console.log(typeof(newarr))


//slice and splice 

const near1 = arr.slice(1,3) // only 1 and 2 3 include nahi hota  aur array change nahi ota

console.log(near1);
console.log("A:-",arr);

const near2 = arr.splice(1,3) // 1 ,2 3 include karta hai aur array hi manuplate kardeta ai

console.log(near2);
console.log("B:-",arr);

















