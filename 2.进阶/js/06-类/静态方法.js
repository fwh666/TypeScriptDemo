"use strict";
//类
class Fwh {
    constructor(name) {
        this.name = name;
    }
    static sayHello() {
        return "hi: " + this.name;
    }
}
// let abc = new Fwh("fwh")
// console.log(abc)
//静态成员变量
class Fwh02 {
    static sayHi02() {
        console.log(Fwh02.name02);
    }
}
let fwh02 = new Fwh02();
Fwh02.name02 = "zhagnsan";
console.log(Fwh02.name02);
console.log(Fwh02.sayHi02);
