class Person {
    static latin = "persona";
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static createAnonymous(){
        return new Person("Unnamed Person");
    }
}

let jonas = new Person('Jonas')
console.log(jonas.getName());
console.log(jonas.latin)
console.log(Person.latin)
let anon = Person.createAnonymous()
console.log(anon)