class Animal {
    constructor(name, age = 20, weight = 20) {
        this.speed = 0; this.name = name;
        this.age = age;
        this.weight = weight;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} kph.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

// const myAnimal = new Animal("animal1", 10, 50);
// // const name1 = "animal2";
// // const age = 20;
// // const weight = 30;
// const myAnimal2 = new Animal(name1, age, weight);


class Rabbit extends Animal {
    constructor(name, earLength) {

        super(name, 20, 30); // call the constructor function of the parent, inherited Animal class
        this.earLength = earLength; // adds custom properties only for instances of Rabbit

    }
    stop() { // function overridden from parent class
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
    hide() { // custom child class function
        console.log(`${this.name} hides!`);
    }
}
let bunny = new Rabbit('bunny', 8); // bunny contains properties and methods from Animal and Rabbit
console.log(bunny.earLength)

