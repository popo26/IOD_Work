class Laptop {
    _hardDiskType = 'HDD'; // protected property, should only be used by inheriting classes
    #numCPUFans = 1; // private property, can only be used internally by class methods
    constructor(brand) { // constructors are always public
        this.brand = brand; // public property
    }
    isGaming() { return false; } // public method
    getHDiskType() { return this._hardDiskType; } // public method to access protected property
    _increaseCPUFans() { // protected method
        if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
    }
}

class GamingLaptop extends Laptop {
    constructor(brand) {
        super(brand); // public property, externally available to instances
        this._hardDiskType = 'SSD'; // protected props should be accessed by children, not instances
        //this.#numCPUFans = 2; // error: private property is not accessible
        this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
    }
    isGaming() { return true; } // public method
}
const alienware = new GamingLaptop('Alienware');
//console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType) // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()) // better: public method for accessing protected
console.log(alienware._increaseCPUFans)
