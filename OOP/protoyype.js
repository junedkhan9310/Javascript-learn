let myname = "juned  as        "

// console.log(myname.length);

// console.log(myname.truelength); //i want to make a prpperty that'll give me true length (without spcaes)

// i don't want property 'truelgnth()' i want to create method 'trulength'

let myheor = ['ironman','spiderman','thor']

let heropower = {
    ironman:'imagination',
    spiderman :'dance',
    thor :'ligthing',
    getspiderpower : function(){
        console.log(`spiderman spiderman`);
    }
}

Object.prototype.juned = function(){  //i've added this method in basic prototype of object so i can acces this with array string and objects
    console.log("juned is everywhere");
};

// heropower.juned()

Object.prototype.truelength= function(){
    return this.trim().length
}


console.log(myname.truelength())














