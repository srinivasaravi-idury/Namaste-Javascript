let cart =["books","bags","logges"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(orderSummary){
    return updateWalletBalance(orderSummary)
})
.then(function(walletBalance){
    console.log(walletBalance)
}).catch(function(err){
    console.log(err)
})

//producer

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cannot Validate Cart");
            reject(err);
        }
        let orderId = 1234;
        if(orderId){
            resolve(orderId)
        }
        
        function validateCart(cart){
        return true;  
        }
    
    })
    return pr;
}

function proceedToPayment(orderId){
    const paymentInfo = new Promise(function(resolve,reject){    
        if(!orderId){
            reject("Invalid Order Id")
        }
        else{
            resolve(getPaymentInfo(orderId))
        }
        function getPaymentInfo(orderId){
            return {orderid:{orderId},payment:2548,currency:"rupees"}
        }
    })
    return paymentInfo
}

function showOrderSummary(paymentInfo){
    const orderSummary = new Promise(function(resolve,reject){    
        if(!paymentInfo){
            reject("Invalid Payment info")
        }
        else{
            resolve(getOrderSummary())
        }
        function getOrderSummary(){
            return {orderid:"1234",item:"shirts"}
        }
    })
    return orderSummary
    }

function showOrderSummary(paymentInfo){
    const orderSummary = new Promise(function(resolve,reject){    
        if(!paymentInfo){
            reject("Invalid Payment info")
        }
        else{
            resolve(getOrderSummary())
        }
        function getOrderSummary(){
            return {orderid:"1234",item:"shirts"}
        }
    })
    return orderSummary
}

function updateWalletBalance(orderSummary){
    const walletBalance = new Promise(function(resolve,reject){    
        if(!orderSummary){
            reject("Invalid Payment info")
        }
        else{
            resolve(getWalletBalance())
        }
        function getWalletBalance(){
            return 659
        }
    })
    return walletBalance
}


