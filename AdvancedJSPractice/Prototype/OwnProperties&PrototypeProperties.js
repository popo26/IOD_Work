//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties

//You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(" ")
console.log(Bird.prototype);

console.log(" ")
for (let x in duck) {console.log(x)}

//would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].