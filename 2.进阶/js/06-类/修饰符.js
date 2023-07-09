"use strict";
class Fwh03 {
    constructor(name03, name04, name05) {
        this.name03 = name03;
        this.name04 = name04;
        this.name05 = name05;
    }
}
class Fwh003 extends Fwh03 {
    play() {
        console.log(this.name03);
        console.log(this.name04);
        // console.log(this.name05)//私有属性的不能使用
    }
}
//Demo
let fwh03 = new Fwh03("zhangsan", "zhangsan", "zhangsan");
console.log(fwh03);
let fwh003 = new Fwh003("zhangsan", "zhangsan", "zhangsan");
console.log(fwh003.play);
