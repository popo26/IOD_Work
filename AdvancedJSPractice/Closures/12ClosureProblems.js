// https://blog.bitsrc.io/collection-of-closure-problems-in-javascript-fcd38ac1c765

//Problem1
var b = 100;
const foo = () => {
    b = 200;
    return () => {
        console.log(b);
    }
}

foo()();


//Problem2
var result = [];
for (var i = 0; i < 5; i++) {
    result[i] = function () {
        return i;
    }
}

console.log(result[0]());

//Problem3 - not working

//  var result2 = [];
//  for (var i=0;i<5;i++){
//     result[i] = (function inner(x) {
//         return function() {
//             return x;
//         }
//     })(i);
//  }

//  console.log(result2[0]());

// Problem4

function run(a1) {
    var b1 = a1;
    return function () {
        b1 += 10;
        return b1;
    }
}

const fn = run(50);
fn();
console.log(fn());

//Problem5

var name = "Javascript centric";

function run2() {
    var name = "Ravi Sharma";

    setTimeout(function () {
        console.log(name);
    }, 1000);
}

run2();

//Problem6

var a = 10;

function run3() {
    var a = 20;

    function slow() {
        console.log(a);
    }
    exec(slow);
}

function exec(func) {
    var a = 30;
    func();
}

run3();

//Problem7

var o1 = (
    function () {
        var o = {
            name: "Javascript centric"
        };
        return o;
    })();

console.log(o1.name);

//Problem8

var b = 10;

function run4() {
    var b = 20;

    function fast() {
        console.log(b);
    }
    return fast;
}

var x = run4();
x();

//Problem9

// var t = 10;

// function run5() {
//     var t = 20;
//     document.getElementById("btn").onclick = function() {
//         console.log(t);
//     }
// }

// run5();

//Problem10

function add(c) {
    var g = "Sum of two numbers is ";
    return function (z) {
        var sum = c + z;
        console.log(g + sum);
    }
}

var totalSum = add(10);
totalSum(5);

//Problem11

// for (var i=0;i<3; i++) {
//     //console.log(i)
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 + i);
// }


//Problem12

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 + i);
}