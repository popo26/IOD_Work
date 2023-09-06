//Property getters and setters

// object with explicit data properties
const jackData = { firstName: 'Jack', surname: 'Black' } // 2 data properties - firstName, surname
// same object with accessor (getter/setter) properties. uses internal values with underscores.
const jackAccessor = {
    get firstName() { // getter for firstName (no parameters) - defaults to Jack unless overridden
        return this._firstName || 'Jack'
    },
    get surname() { // getter for surname (no parameters) - defaults to Black unless overridden
        return this._surname || 'Black'
    },
    set firstName(newFirstName) { // setter for firstName (one parameter) - updates to new value
        this._firstName = newFirstName
    },
    set surname(newSurname) { // setter for surname (one parameter) - updates to new value
        this._surname = newSurname
    }
}
// can update (and access) data properties and accessor properties in the same way
jackData.firstName = 'Thomas' // updates firstName data property directly
jackAccessor.firstName = 'Jacob' // uses firstName setter to set new value - use console.log to check

console.log(jackAccessor.firstName); // getter


/////////36 Use case: object literal getters to work out values

// object literal getters to work out values
const jackBlack = {
    firstName: 'Jack',
    surname: 'Black',
    dateOfBirth: new Date('1969-08-28'),
    get fullName() { // now we can do jackBlack.fullName and it will work it out
        return this.firstName + ' ' + this.surname;
    },
    get age() { // accessor will work out current age based on birthday
        const today = new Date();
        return today.getFullYear() - this.dateOfBirth.getFullYear();
    }
}
jackBlack.age = 44 // not writable (no setter), won’t work
console.log(jackBlack.fullName) // Jack Black
console.log(jackBlack.age) // 54 (currently) - no setter so change to 44 doesn't work
for (let prop in jackBlack) console.log(`${prop} is ${jackBlack[prop]}`) // enumerable props
// includes firstName, surname, dateofBirth, fullName and age


// Constructor function getter using defineProperty

function Actor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    // when using the defineProperty method to create properties,
    // configurable/writable/enumerable default to false
    Object.defineProperty(this, 'age', {
        get() {
            const today = new Date();
            return today.getFullYear() - this.birthday.getFullYear()
        },
        //enumerable: true,
        //configurable: true,
        //writable: true,  // When using get() to work out age exists, this can't co-exists
    })
}
const sean = new Actor('Sean Connery', new Date('1930-08-25'))
sean.age = 100 // not writable, has no effect
console.log(sean.age) // 93 (currently)
for (let prop in sean) console.log(`${prop} is ${sean[prop]}`) // only name and birthday, not age

// Class accessor properties

class ActorClass {
    #numMovies = 0; // private class property (will cover this shortly)
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    get age() { // getter calculates age based on birthday
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
    }
    set numMovies(number) { // setter enforces data validation
        if (number > 0 && number < 100) this.#numMovies = number;
        else throw new Error('Number of movies cannot be zero or more than 100')
    }
    get numMovies() { // gets internal, private property
        return this.#numMovies
    }
}
const angelina = new ActorClass('Angelina Jolie', new Date('1975-06-04'));
angelina.numMovies = 57; // using a value less than 1 or more than 100 throws an error
console.log(`${angelina.name} is ${angelina.age} and has been in at least ${angelina.numMovies} movies`)