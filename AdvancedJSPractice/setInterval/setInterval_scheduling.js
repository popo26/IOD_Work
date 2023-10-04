function repeatInterval(delay, limit)
{
let counter = 1; // part of the outer environment record for repeatInterval
// intervalTimer is a reference to interval, to allow it to be cancelled
let intervalTimer = setInterval(function repeatThis() {
console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
if (counter == limit) clearInterval(intervalTimer); //cancel interval after execution limit
counter++; // keep track of how many times the interval has executed, in outer environment
}, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10);