function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

//////////////////////////////////
//example of NEF

let sayHi = function (who) { // unnamed function stored in sayHi variable
  if (who) {
    console.log(`Hi, ${who}!`);
  } else {
    //sayHi("guest") //doesn't work
    who = 'guest';
    sayHi(who);
  }
}
sayHi()

const guestWelcome = sayHi;
guestWelcome();

sayHi = null;
//guestWelcome();


//////////////////////////
function printMessage(msg) {
  console.log(`Message: ${msg}`)
}

// let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
// clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

//function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec


clearTimeout(setTimeout(printMessage, 1000, 'timeout cancelled so never prints')); // printMessage function is cancelled before delay of 1 second

//setTimeout(printMessage, 1000, 'timeout cancelled so never prints')

//////////////////////////
setTimeout(() => console.log("first message"), 5000); //asynchronous code with 5s delay
setTimeout(() => console.log("second message"), 3000); //asynchronous code with 3s delay
setTimeout(() => console.log("third message"), 1000); //asynchronous code with 1s delay
setTimeout(() => console.log("fourth message"), 0); //asynchronous code with no delay
console.log("fifth message"); //standard synchronous code
