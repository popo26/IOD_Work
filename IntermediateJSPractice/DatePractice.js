// https://www.w3resource.com/javascript-exercises/javascript-date-exercises.php

/*
1. Write a JavaScript function to check whether an `input` is a date object or not.

Test Data :
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
Output :
false
true
true
false
*/


function is_date(input) {
    return input instanceof Date;
}

console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));

/*
2. Write a JavaScript function to get the current date.

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
*/

function curday(separator) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    return `${month}${separator}${date}${separator}${year}`
}

console.log(curday('/'));
console.log(curday('-'));
