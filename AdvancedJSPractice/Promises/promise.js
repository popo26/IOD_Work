
function sum(a, b) {
    return a + b;
}

//How to create a Promise as a Producer(Creator)
//All of these are stored in the const "promise" as properties.
//Producer Syntax

const promise = new Promise(function (resolve, reject) { //those 2 functions(resolve, reject) are optional.
    const result = sum(4, 5);
    if (result != 9) {
        reject("sum of 4 and 5 must be 9."); //Producer decide what sort of error to use like mentioned here. 
    }
    resolve(result);
});

//Consumer Syntax

////Ver1
// promise.then( (result) => console.log(result), // prints if/when promise resolves successfully
// (error) => console.error(error) ) // optional, prints if/when promises completes with error

// //Ver2
// promise.then( (result) => console.log(result) ) // prints if/when promise resolves successfully
// .catch( (error) => console.error(error) ) // prints if/when promises completes with error

//Ver3 - best one
promise
    .then((result) => console.log(result)) // prints if/when promise resolves successfully
    .catch((error) => console.error(error)) // prints if/when promises completes with error
    .finally(() => console.log('promise is settled')) // prints when promise settles





