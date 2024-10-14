async function getData(Name){
return `Namaste ${Name}`
}

const data = getData("ravi")
data.then(function(res){
console.log(res) //Namaste Ravi
})

async function handlePromise(){
    try{
    const APIURL = "https://api.github.com/users/srinivasaravi-idury"
    const data = await fetch(APIURL);
    const val = await data.json();
    console.log(val)
    }catch(err){
        console.log(err)
    }
}
handlePromise()