//Primitives as objects

const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits
const hello = 'hello world' // primitive string
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(hello.endsWith('world')) // true

//String-like object
const user = {
    name: 'John'
}
console.log("User: " + user) //User: [object Object]

const user2 = {
    name: 'John',
    toString() {
        return this.name
    }
}
console.log("User: " + user2) // User: John

//Number-like object

const apple = {
    name: 'Apple',
    category: 'Granny Smith',
    price: 1.2,
    valueOf() { // without this special function, we can’t multiply the object below
        return this.price
    }
}
console.log(apple * 2) // 2.4

//Decimal Numbers

//very large numbers
const billion1 = 1000000000 // 9 zeros - hard to read
const billion2 = 1_000_000_000 // easier to read, underscores ignored
const billion3 = 1e9 // exponential format
console.log(billion1 === billion2) // true
console.log(billion2 === billion3) // true


//very small numbers
const microSecs1 = 0.000001 // 6 decimal places - hard to read
const microSecs2 = 0.000_001 // easier to read, underscores ignored
const microSecs3 = 1.e-6 // exponential format
console.log(microSecs1 === microSecs2) // true
console.log(microSecs2 === microSecs3) // true

//Hex numbers - base-16

const r = 0xff;
const g = 0xff;
const b = 0xff;
const white = `rgb(${r}, ${g}, ${b})`
console.log(white) // rgb(255, 255, 255)

//Binary (base2 - 0b) and Octal numbers (base8 -0o)
const mobile = 041234567
console.log(mobile) // 8730999 - decimal equivalent
const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255
console.log(binary) // 255
console.log(binary === octal) // true

//Base conversion

const ff = 255
const ee = 238
const dd = 221
console.log(ff.toString(16)) // ff
//convert from rgb colour code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd


//Imprecise calculations

const toobig = 1e350 // 1 * 10350 - overflows storage
console.log(toobig) // Infinity
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

const point1 = 0.1; const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_991

//isFinite and isNaN
console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false

console.log(isFinite(1 / 3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number


//parseInt and parseFloat (soft conversion)

console.log(+"100px") // NaN - 100px is not a valid number   --- unary plus (+) and Number() are strict, comparison to parseInt and parseFLoat

console.log(parseInt("150px")) // 150 - stops at 'px'
console.log(parseFloat("2.5em")) // 2.5 - stops at 'em'
console.log(parseFloat("12.34.56")) // 12.34 - stops at second invalid decimal
console.log(parseInt("a123")) // NaN - can't parse the 'a' so stops


//Strings

const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
console.log(guestList)

//comparing strings  --- strings are UTF-16

console.log('Z'.codePointAt(0)) // 90
console.log(String.fromCodePoint(90)) // Z

//Manipulating strings

const string = 'I could be anything you like'
console.log(string.length) // 28 - string is 28 characters long
console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.substring(20, 22))
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog')) // false - needs the full stop
console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end

//Arrays

const arr1 = new Array(1, 2, 3) // constructor, not often used
const arr2 = [1, 2, 3] // array literal, much more common
console.log(arr1) // [ 1, 2, 3 ] - both do the same
console.log(arr2) // [ 1, 2, 3 ] - both do the same

//FIFO (First-In-First-Out) - push(end) and shift(remove from beginning) and unshift (add to beginning)

const fruits = ['Apple', 'Orange', 'Pear']
const firstFruit = fruits.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruits) // [ 'Orange', 'Pear' ]

fruits.unshift('Banana') // adds to the beginning of the array
console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]

//LIFO (Last-In-First-Out) - push and pop(remove from end)

const fruits2 = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits2.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits2); // [ 'Apple', 'Orange' ]

fruits.push('Banana') // adds to the end of the array
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana' ]

//Internals -- arrays are not primitives so use memory reference

const fruits3 = ['Apple', 'Orange', 'Pear']
const fruits4 = fruits3 // refers to same memory location
fruits3.push('Banana') // add new item to the end of fruits1
console.log(fruits4) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they are both references to the same place
console.log('fruit at index 0: ' + fruits3[0]) // Apple
console.log('fruit at index 1: ' + fruits3[1]) // Orange

//toString method -- Arrays dont have valueOf method. Only implement toString conversion

const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log('Numbers: ' + numbers) // Numbers: 1,2,3
console.log(typeof numbers[0]); //number /// AI thought type is string
console.log(typeof ('Numbers: ' + numbers)) //string
console.log(typeof numbers); //object
console.log(numbers); // [1, 2, 3]
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty:

//splice method - insert, remove, replace items in an array  
//arr.splice(start[, deleteCount, elem1, ..., elemN])

const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ]
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]

//slice method - returns a new array
//arr.slice([start], [end])

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ] - last 3
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] - no change

//concat method -- returns new array
//arr.concat(arg1, arg2...)

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

//forEach method - runs a function fo every element of the array
/*
arr.forEach(function(item, index, array) {
    ... do something
})
*/

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
    console.log(`#${index}: ${hobbit}`) // runs once for every item in array
});

//indexOf -- looks for 'item' starting from index 'from'
// if nothing found, returns -1
//arr.indexOf(item, from)

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')
// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found

//lastIndexOf -- same as indexOf method but looks from right to left
//arr.lastIndexOf(item, from)

const marks2 = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks2.indexOf('B-')
let bIndexLast = marks2.lastIndexOf('B-')
console.log(marks2[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks2[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

//find method
/*
 const result = arr.find(function(items, index, array) {
    if true is returned, item is returned and interation is stopped.
    if faulse is returned, it returns undefined
})
*/

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
//we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') //returns matching item
let shirt = products.find(product => product.category == 'Shirts') //returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

//Page34 - filter method - similar to find methond but instead it returns all matching elements.

const products2 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products2.filter(product => product.category == 'Shirts')
let under50 = products2.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array

//Page35 map methond

let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>' + product.title + '</h2>')
let raisedPrices = products.map(product => ({ ...product, price: product.price + 5 }))
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

//Page36 sort method - if mathmatical function to compare values the arrays are sorted as strings.
//comparison function should take 2 parameters

products.sort((product1, product2) => product1.price - product2.price)
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort((p1, p2) => p1.title > p2.title ? 1 : -1)
console.log(products) // original array is modified to new title sorting order: 3,4,2,1
const numbers10 = [4, 8, 1, 5, 66, 23, 41]
console.log(numbers10.sort()) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log(numbers10.sort((num1, num2) => num1 - num2)) // [ 1, 4, 5, 8, 23, 41, 66 ]

const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log(stringNums.sort()) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log(stringNums.sort((a, b) => a - b)) // [ '1', '35', '41', '81', '102', '1004' ]

const stringNums2 = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums2].sort()
console.log(stringNums2) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]

//reverse method

const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original
console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)

//join method
const elements2 = ['Wind', 'Water', 'Fire', 'Air']
console.log(elements2.join()) // Wind,Water,Fire,Air
console.log(elements2.join(' ')) // Wind Water Fire Air
console.log(elements2.join('; ')) // Wind; Water; Fire; Air

//reduce method
/*
const value = arr.reduce(function(accumulator, item, index, array) {
    some code
}, [initia]);
*/

const products10 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
] // initial (below) should be 0 for reliability in calculating totals
const totalPrice = products10.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
const totalQty = products10.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
console.log(totalPrice) // 128.85000000000002
console.log(totalQty) // 10

//reduce method - issue with not having initial value added
const totalPrice2 = products10.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price)
const totalQty2 = products10.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity)
console.log(totalPrice2) // [object Object]54.9549.95
console.log(totalQty2) // [object Object]35

//chaining array functions - not good idea for readability and debug

const products11 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]
//get the titles of all products over $25:
const over25Titles = products11.filter(prod => prod.price > 25).map(prod => prod.title)
console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]
//list product ids and titles in descending order of price:
const hiloProducts = [...products11].sort((p1, p2) => p1.price - p2.price).reverse()
    .map(prod => ({ id: prod.id, title: prod.title }))
console.log(hiloProducts)
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]

//Iterables
//for ...of loop -- This can be used for any iterables such as String/Array/TypedArray/Map/Set, but not for object
//for object, use for ...in loop
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn
const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal' }
//for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable


//Static Method - Array.from - to convert from Array-like object or iterable to Array (creates shallow copy)
/*
Array.from(arrayLike, mapFn, thisArg);
Array.from(iterable, mapFn, thisArg);
*/
console.log(Array.from("string")) // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat']))) // [ 'cat', 'bat', 'sat' ]
console.log(Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])))
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
function makeArray() {
    return Array.from(arguments);
}
console.log(makeArray(1, 2, 3)); // [ 1, 2, 3 ]


//Map - collection of keyed data items, just like Object.But its keys can be any data type.
/*
● new Map(): creates the map
● map.set(key, value): stores the value by the key, and returns map itself
● map.size: returns the current element count
● map.get(key): returns the value with the matching key, or undefined if key doesn’t exist in map
● map.has(key): returns true if the key exists, false otherwise
● map.delete(key): removes the value with the matching key
● map.clear(): removes everything from the map
● map.keys(): returns an iterable (not an array, but similar) for keys
● map.values(): returns an iterable (not an array, but similar) for values
● map.entries(): returns an iterable for entries [key, value]. Used by default in for .. of.
*/
const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({ name: 'John' }, { phone: '0412345678' }) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true

console.log(exampleMap.get('1')) // second string one - gets value for matching key
console.log(exampleMap.get(2)) // undefined - key doesn't exist so no value
console.log(exampleMap.has(1)) // true - key does exist
console.log(exampleMap.delete(true)) // true - removes item and returns true if successful
exampleMap.clear() // removes all items from map
console.log(exampleMap) // Map(0) {}

const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
])
for (let ingredient of recipeMap.keys()) {
    console.log(ingredient) // flour, milk, eggs, butter
}
for (let quantity of recipeMap.values()) {
    console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) { // same as recipeMap.entries()
    console.log(item) // ['flour', '1 cup'], (and so on)
}

//Map - Object.fromEntries - conversion with Object
const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
])
const priceObject = Object.fromEntries(priceMap)
console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }

//Page48 - Map - Object.entries - conversion from Object to a Map
const priceObject2 = { banana: 1, pineapple: 2, watermelon: 5 }
const priceMap2 = new Map(Object.entries(priceObject))
console.log(priceMap2) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap2.get('banana')) // 1


const christmas = new Date('2023&12&25'); //any separator is ok
console.log(christmas);

const boxyingDay = new Date(2023, 11, 26) //month - Jan is 0
console.log(boxyingDay);
console.log(boxyingDay.toLocaleDateString());

const now = new Date();
console.log(now);
console.log(now.getTimezoneOffset());