/* The code below shows "An async function always returns a Promise."

    Using .then() is a way to handle the resolved value of the Promise, 
    which works just as well as using await within an async function.
 */

const getData = async () => {
    return "hoohoo";
}

const data =  getData();

console.log(data);

/*
    
Promise {<fulfilled>: 'hoohoo'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"hoohoo"

 */




/*  Using .then() is a way to handle the resolved value of the Promise, 
    which works just as well as using await within an async function.

    You can only use await inside an async function or at the top level of a module.
*/

const getDataAWait = async() =>{
    return "HOOOOOO";
}

const fetchData = async() => {
    const data = await getDataAWait();
    console.log(data);
}

fetchData();

