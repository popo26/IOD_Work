//Protected with underscore for property and method

class Laptop{
    _hardDiskType = "HDD";
    #numCPUFans = 1;
    constructor(brand){
        this.brand = brand;
    }
    getHDiskType() {
        return this._hardDiskType;
    }
}

const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand);
console.log(macbook._hardDiskType) //works but bad as it violates encapsulation principles. Silly JS.
console.log(macbook.getHDiskType())