"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(param) {
        console.log('hi:' + param);
        return "hi: " + param;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
}
//Demo
const a = new Animal("猫", 3);
a.sayHi("maomao");
const b = new Dog("狗", 4);
b.sayHi("狗狗");
