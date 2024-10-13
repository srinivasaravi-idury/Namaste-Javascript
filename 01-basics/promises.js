let cart =["books","bags","logges"];

const promise = createOrder(cart);

promise.then(function(orderId){
console.log(orderId)
});

//producer

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cannot Validate Cart");
            reject(err);
        }
        let orderId = 12345;
        if(orderId){
            resolve(orderId)
        }
        
        function validateCart(cart){
        return true;  
        }
    
    })
    return pr;
}
