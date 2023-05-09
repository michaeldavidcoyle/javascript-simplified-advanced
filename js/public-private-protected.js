class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Janitor extends Employee {
    constructor(name, mopCount) {
        super(name);
        this.mopCount = mopCount;
    }

    // private properties (not available outside class, not even to subclasses)
    #internalOnlyVariable = true;
    #cleaningFactor = 0.5;

    // no official way to create protected properties, but by convention
    // a leading underscore is sometimes used
    _cleaningProductsCount = 10;

    clean() {
        if (this.#internalOnlyVariable) {
            console.log(`${this.name} says, "Behold, as a wild ass in the desert, go I forth to my work."`)
        }
        this.#helper();
        let hours = 4;
        let mops = this.mopCount > 1 ? 'mops' : 'mop';
        console.log(`${this.name} cleaned with ${this.mopCount} ${mops} in ${this.#cleaningFactor * hours} hours (standard time: ${hours} hours).`)
    }

    #helper() {
        // something only useful to within class
        console.log('Help provided.')
    }
}

const janitor = new Janitor('Blake', 1);
// public method
janitor.clean();
// public property
console.log(janitor.name);
console.log(janitor.cleaningFactor) // undefined