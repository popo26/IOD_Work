/*
function printMessage(msg) {
    console.log(`Message: ${msg}`)
}
//function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec
*/

///////////////////////
// What is 'current' here??

function repeatTimeout(delay, limit) {
    let counter = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < limit) setTimeout(repeatThis, delay, current + 1) //repeat if limit not reached
    }, delay, counter);
}
repeatTimeout(2000, 10);

//setTimeout(function repeatThis(current) {console.log();if (current < limit) setTimeout(repeatThis, delay, current + 1)}, delay, counter);


// function repeatTimeout(delay, limit) {
//     let counter = 1;
//     console.log("One")
//     setTimeout(function repeatThis(current) {
//         console.log("Two")
//         console.log(current + ',' + counter);
//         console.log("Three")
//         if (current < limit) {
//             setTimeout(repeatThis, delay, current + 1);
//             console.log("Four")
//         }
//     }, delay, counter);
// }


// function repeatTimeout(delay, limit) {
//     let counter = 1;
//     setTimeout(function repeatThis(current) { //current = 1
//         console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
//         if (current < limit) setTimeout(repeatThis, delay, current + 1)
//     }, delay, counter);
// }


// repeatTimeout(2000, 10);