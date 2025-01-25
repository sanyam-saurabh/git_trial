//CREATING PROMISES AND CHAINING
//Note : just call the script in html tag


const cart = ["kurta", "pajama", "pant"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId; 
})
.then(function(orderId){
    return proceedtoPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

//Producer'End

function createOrder(data){
    let pr = new Promise(function(resolve , reject){
        if(!isvalidCart(data)){
            let err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "123445";
        
        if(orderId && isvalidCart(data)){
            console.log("processing your order");
            //settimeout sending the data after 5 secs
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }

    });

    return pr;
}


function isvalidCart(data){
    return true;
}

function proceedtoPayment(orderId){
    return new Promise(function(resolve , reject){
        resolve("payment is successful");
    });
}