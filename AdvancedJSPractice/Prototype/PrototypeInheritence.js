// https://www.programiz.com/javascript/prototype#:~:text=In%20JavaScript%2C%20every%20function%20and,checking%20the%20prototype%20value%20console.



// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greet(); // hello John
person2.greet(); // hello John

// prototype value of Person
console.log(Person.prototype);

//Print all inherited properties
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Person)))

console.log(Object.getPrototypeOf(Person))

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(person1)))

console.log(Object.getPrototypeOf(person1))


console.log(person1.__proto__); 

