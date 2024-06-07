
const coding =["js","ruby","java","c++","python"]

const items = coding.forEach((item)=>{
    return item;
})

// console.log(items);  //undefined cause it doesn't return value

const mynum= [1,2,3,4,5,6,7,8,9,10]

// const newnumb=mynum.filter((num)=> num>4)  //this return values so we save it in  a var
// console.log(newnumb);

// const newnumb = mynum.filter((num)=> { return num>4})  // if we add curly braces we'll ave to add return keyword to get val
// console.log(newnumb);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const userbooks= books.filter((bk)=> bk.genre==='History')
const userbooks= books.filter((bk)=>{
    return bk.publish >=1995 && bk.genre==="History"
})
// console.log(userbooks);


//*****************************Map and chaining****************************** */

const mynumbers= [1,2,3,4,5,6,7,8,9,10]

// const finalval= mynumbers.map((num)=> num+10)

// mynumbers.forEach((item)=> {console.log(item+10);})

const newnum= mynumbers  //isko bolte hai chianing ek ke bad ek functions lagana
                        .map((num)=> num*10)  //pehle ye hoga fir iski value niche ayegi
                        .map((num)=>num+1)      //iski value niche jayegi
                        .filter((num)=> num>=40)

console.log(newnum);





































