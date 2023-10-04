/*
In JavaScript, objects inherit properties and functions from a prototype stored
in a special hidden property [[Prototype]] (as named in the specification), that
is either null or references another object (such as Object). It can be accessed
in a few ways.
*/

// __proto__ is the old, no longer recommended way:

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal))) //prints all inherited properties
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)))
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // OLD WAY - explicitly inherit from animal prototype
console.log(rabbit.eats) // true, inherits prototype properties

// Object.setPrototypeOf (simplest) or Object.create (most control over
// property descriptors) are the newer, recommended ways to set a prototype

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
    jumps: { // name of custom 'own' property for rabbit object
        value: true, // property descriptor to set the property value
        enumerable: true // property descriptor to make this enumerable - otherwise jumps not in for...in
    }
});
console.log(rabbit1, rabbit2) // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs) // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones