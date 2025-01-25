/* Promise.all is a powerful feature in JavaScript that allows you to execute 
    multiple asynchronous operations in parallel and wait for all of them to complete before proceeding. 
    It takes an iterable of promises (like an array) and returns a single promise that 
    resolves when all the promises in the iterable have resolved or rejects if ANY ONE of the promises rejects.

    If you use Promise.all and one of the promises rejects, the entire Promise.all operation will
     immediately reject with the reason of the first promise that rejects, even if other promises
      have already resolved. 
      
      This means that Promise.all is designed to reject as soon as any promise in the iterable rejects.

 */



const pr1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 7000, "first promise");
})
const pr2 = new Promise(function(resolve, reject){
    setTimeout(reject("second promise"), 3000);
})

const pr3 = new Promise(function(resolve, reject){
    setTimeout(resolve, 4000, "third promise");
})

Promise.all([pr1,pr2,pr3])
.then(function(data){
    console.log("Promise.All:",data);
})
.catch(function(err){
    console.log("Promise.All: One of the promise rejected:",err);
})

/* If you want to handle multiple promises and ensure all results are processed even if some promises reject,
     you might consider using Promise.allSettled instead. This method returns a promise that resolves after 
     all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

*/

Promise.allSettled([pr1,pr2,pr3])
.then(function(data){
    console.log("Promise.allSettled",data);
})

/*Promise.race is another useful method in JavaScript's Promise API. 
    It allows you to wait for the first promise in a list to settle (either to fulfill or reject)
     and resolves or rejects with the value or reason from that promise. 
     Essentially, it "races" multiple promises against each other and continues with the result of the one that settles first.
*/ 

Promise.race([pr1, pr2,pr3])
  .then(value => {
    console.log('Promise.race: The first resolved promise is:', value); // "The winner is: First Promise"
  })
  .catch(error => {
    console.error('Promise.race: The first rejected promise:', error);
  });


  /* promise.any waits for the first success and return it else if all fails it returns the whole(all) errors 
  */
  Promise.any([pr1, pr2, pr3])
  .then(value => {
    console.log('Promise.any: The first fulfilled promise:', value); 
  })
  .catch(error => {
    console.error('Promise.any: All promises were rejected:', error.errors);
  })
  
