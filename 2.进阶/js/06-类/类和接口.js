"use strict";
class Door {
    alert() {
        console.log('Door alert');
    }
}
class NewCar {
    alert() {
        console.log('Car alert');
    }
}
//demo
let door = new Door();
let newCar = new NewCar();
door.alert();
newCar.alert();
class newCar01 {
    alert() {
        console.log('newCar01 alert');
    }
    lightOn() {
        console.log('newCar01 lighton');
    }
    lightOff() {
        console.log('newCar01 lightoff');
    }
}
//接口继承类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// let point01: Point01 = new Point01(1, 2, 3)
let point01 = { x: 1, y: 2, z: 3 };
