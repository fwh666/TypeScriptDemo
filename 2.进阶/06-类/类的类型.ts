class Car {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Ben extends Car {
    constructor(name: string) {
        super(name)
    }
}
//demo
let car: Car = new Car("")
let ben: Ben = new Ben("")

let car01: Ben = new Car("")
let ben01: Car = new Ben("")