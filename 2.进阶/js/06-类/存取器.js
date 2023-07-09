"use strict";
class Perpeo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //存取器
    get fullName() {
        return this.firstName + this.lastName;
    }
    set fullName(param) {
        let names = param.split("-");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
//Demo
const z = new Perpeo("zhang", "dapao");
console.log(z);
console.log(z.fullName);
z.fullName = "张-桑峰"; //没有set属性，此处会报错
console.log(z.fullName);
