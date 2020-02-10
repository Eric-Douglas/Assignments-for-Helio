class Animal {
    constructor() {

    }
    sayName() {
        console.log(this._name)
    }
    speak() {
        console.log(this._sound)
    }

    get name() { return this._name }
    set name(newValue) { this._name = newValue }

}


class Dog extends Animal {
    constructor(sound, name) {
        super()
        this._sound = sound
        this._name = name
    }
}


let myDog = new Dog("bark", "Ron")

console.log(myDog)


myDog.name = "Luke"
console.log(myDog.name)
myDog.speak()