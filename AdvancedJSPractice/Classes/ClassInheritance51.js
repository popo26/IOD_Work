class Animal {
    type = 'animal';
    constructor(name) {
    this.speed = 0;
    this.name = name;
    }
    describe() {
    console.log(`${this.name} is a ${this.type}`)
    }
    //... previous Animal methods go here
    }
    class Rabbit extends Animal {
    type = 'rabbit';
    //... previous Rabbit methods go here
    }
    new Rabbit('bunny').describe() // bunny is a rabbit
    new Animal('fuzzy wuzzy').describe() // fuzzy wuzzy is a animal