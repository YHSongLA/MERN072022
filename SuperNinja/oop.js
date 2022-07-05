class Ninja {
    // MEMEBER VARIABLE | CONSTRUCTOR
    constructor(nameParam, healthParam) {
        this.name = nameParam
        this.health = healthParam
        this.speed = 3
        this.strength = 3
    }

    // METHODS
    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake() {
        this.health += 10
    }
}

// SENSEI CLASS INHERIT FROM NINJA
class Sensei extends Ninja {
    // CONSTRUCTOR | MEMBER VARIABLE
    constructor(nameParam, healthParam) {
        super(nameParam, healthParam);
        // ADD WISDOM ATTRIBUTE
        this.wisdom = 10
    }

    // METHODS
    speakWisdom = () => {
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// INSTANTIATE NINJA OBJECT
const ninja1 = new Ninja("Yohan", 100)
// CALL FUNCTIONS
ninja1.showStats()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.showStats()

// INSTANTIATE SENSEI OBJECT
const sensei1 = new Sensei("ED", 200);
sensei1.showStats()
sensei1.speakWisdom()
sensei1.showStats()