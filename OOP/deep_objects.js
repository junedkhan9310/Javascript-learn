const descripor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descripor);
// console.log(Math.PI);

const chai = {
    name :'cold tea',
    price :'23',
    isaval:'yes'
}

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));
Object.defineProperty(chai,'name',{
    writable :false,
    enumerable :false,
})

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

// chai.name = 'hot tea'
// console.log(chai.name);


for (let [key,val] of Object.entries(chai)) {  //if enumerable is false then name can't be iterate trought
    console.log(`so ${key} and ${val}`);   
}
















