function cachingDecorator(origFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure
    console.log("One")
    return function (x) { // decorator returns same function with extra bits - caching
        console.log("Two")
        if (cache.has(x)) { // if the key exists in the cache,
            console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
        }
        let result = origFunction(x) // otherwise, call the original function and store the result
        cache.set(x, result); // then cache (remember) the result for next time
        return result;
    };
}


// let worker = {
//     getMultiplier() {
//         return Math.floor(Math.random() * 1_000_000); // large random number
//     },
//     slow(x) {
//         let random = 0, goal = x * this.getMultiplier(); // needs context to work
//         for (let i = 0; i < goal; i++) random++;
//         console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
//         return random; //return large number
//     }
// };
// worker.slow(5) // works, context comes from before the dot, ie. worker
// worker.fast = cachingDecorator(worker.slow) // without call/apply, context is lost
// worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')


/// How to make the above work with call/apply?

let worker2 = {
    getMultiplier() {
        return Math.floor(Math.random() * 1_000_000); // large random number
    },
    slow(x) {

        let random = 0, goal = x * this.getMultiplier(); // needs context to work
        for (let i = 0; i < goal; i++) random++;
        console.log(`worker2.slow(${x}): randomly generated goal is ${goal}`);
        return random; //return large number
    }
};


// STILL NOT WORKING:
// worker2.fast = cachingDecorator.bind(worker2.slow) //use 'bind'
// worker2.fast(3) 
worker2.fast2 = () => cachingDecorator(worker2.slow)
worker2.fast2(4)



