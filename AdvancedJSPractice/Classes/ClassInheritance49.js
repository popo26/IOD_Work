class Animal {
    constructor(name){
        this.speed=0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} kph`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
}

class Rabbit extends Animal {
    stop(){
        super.stop();
        this.hide();
    }

    hide(){
        console.log(`${this.name} hides`)
    }
}

let bunny = new Rabbit("bunny");
bunny.run(9);
bunny.stop();