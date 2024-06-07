const mynums= [1,2,3]

const redMynum= mynums.reduce((acc,currval)=>{
    // console.log(`accumlator: ${acc} and current value ${currval}`);
    return acc+currval
},0)

// console.log(redMynum);

const shoppingCart = [
    {
        itemname:"jscourse",
        prive:2999
    },
    {
        itemname:"fullStack",
        prive:5999
    },
    {
        itemname:"Ml",
        prive:3999
    }
]
const totalprice = shoppingCart.reduce((acc,item)=>(item.prive+acc),0) 

console.log(totalprice);










































