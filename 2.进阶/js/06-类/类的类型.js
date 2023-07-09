"use strict";
class Car {
    constructor(name) {
        this.name = name;
    }
}
class Ben extends Car {
    constructor(name) {
        super(name);
    }
}
//demo
let car = new Car("");
let ben = new Ben("");
let car01 = new Car("");
let ben01 = new Ben("");
