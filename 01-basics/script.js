console.log("Jai Shree Ganesha, Jai Shree Ram");

//good part of callback
console.log("hello")
setTimeout(()=>console.log("how r u?"),2000);
console.log("Ravi")
// bad part of callback
// 1.callback Hell 
// 2.Inversion of control


const list = [
    {firstName:"Ravi",lastName:"Ram",age:30},
    {firstName:"Sam",lastName:"Thor",age:40},
    {firstName:"Lakshmi",lastName:"Mohan",age:35},
    {firstName:"Anil",lastName:"Kondle",age:35},
    {firstName:"Eshwar",lastName:"Mardikurni",age:38},
    {firstName:"Komali",lastName:"Vinu",age:25},
    {firstName:"Durga",lastName:"Mani",age:24}]

const output = list.reduce(function(acc,curr){
    if(curr.age >= 30){
        acc.push(curr.firstName)
    }
    return acc;
},[])

console.log(output)

const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage}`);
  });


  
  

