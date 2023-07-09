interface Alam {
    alert(): void;
}

class Door implements Alam {
    alert(): void {
        console.log('Door alert')
    }
}

class NewCar implements Alam {
    alert(): void {
        console.log('Car alert')
    }
}
//demo
let door = new Door()
let newCar = new NewCar()

door.alert()
newCar.alert()

//实现多接口
interface Light {
    lightOn(): void
    lightOff(): void
}

class newCar01 implements Alam, Light {
    alert(): void {
        console.log('newCar01 alert')
    }
    lightOn(): void {
        console.log('newCar01 lighton')
    }
    lightOff(): void {
        console.log('newCar01 lightoff')
    }
}

//接口继承接口
interface LightAlam extends Alam {
    lightOn(): void
    lightOff(): void
}

//接口继承类
class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
interface Point01 extends Point {
    z: number;
}
// let point01: Point01 = new Point01(1, 2, 3)
let point01: Point01 = { x: 1, y: 2, z: 3 }

