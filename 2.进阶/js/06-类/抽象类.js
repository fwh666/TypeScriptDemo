"use strict";
class Animal02 {
}
class Cat extends Animal02 {
    constructor(name002) {
        super();
        this.name002 = name002;
    }
    sayHello() {
        console.log("sayHello");
    }
}
let cat01 = new Cat("Tom");
console.log(cat01.name002);
cat01.sayHello();
// console.log(cat01.sayHello())
