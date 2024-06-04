
// console.log(a,b,c);

// {} --> scope 

if(true){
    let a=10
    const b=20
    var c=32   

}

// console.log(a);  it is declared in scope so we cna't use
// console.log(b);  it is also
// console.log(c);  //this can be use due to var this is disadvatage of 'var' even without var tis problem will exists


////nested scope

function one(){
    const username = "juned"
    function two(){
        age= 20
        console.log(username);
        // console.log(age);
    }
    // console.log(age);
    two()
}
one()















