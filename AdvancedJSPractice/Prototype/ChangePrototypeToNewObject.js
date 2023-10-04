//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object

function Bird(name) {
    this.name = name;  //own property
  }
  


//Bird.prototype.numLegs = 2;
//This becomes tedious after more than a few properties.

// Bird.prototype.eat = function() {
//   console.log("nom nom nom");
// }

// Bird.prototype.describe = function() {
//   console.log("My name is " + this.name);
// }
// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


let duck = new Bird("duck");
// duck.eat()
// console.log("\r\n---Bird prototype--")
// console.log(Bird.prototype)
// console.log("\r\n---Duck object--")
console.log(duck)
// console.log("\r\n---Bird--")
// console.log(Bird)

console.log("\r\n--Duck3--");
let duck3= new Bird();
console.log(duck3)


// Remember to Set the Constructor Property when Changing the Prototype

// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:



duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

console.log("\r\n--checking constructor property")
console.log(duck.constructor === Bird)
console.log(duck.constructor === Object)
console.log(duck instanceof Bird)

// In order, these expressions would evaluate to false, true, and true.

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

let duck2 = new Bird("duck2");

console.log("\r\n--checking constructor property again")
console.log(duck2.constructor === Bird)
console.log(duck2.constructor === Object)
console.log(duck2 instanceof Bird)


