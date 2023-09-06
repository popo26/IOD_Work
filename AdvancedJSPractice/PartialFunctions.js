function multiply(a, b) {
    return a * b;
}
const triple = multiply.bind(null, 3); //context is not needed, binds 3 as first argument a
console.log(triple(5)) // a is 3 (from bind), b is 5 (from function call), result is 15