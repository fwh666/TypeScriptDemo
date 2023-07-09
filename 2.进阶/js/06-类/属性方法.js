"use strict";
class persion {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(param) {
        return 'hi: ' + param;
    }
}
let persionN = new persion("zhangsan", 19);
console.log(persionN.sayHi("lisi"));
