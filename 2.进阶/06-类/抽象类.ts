abstract class Animal02 {
    abstract name002: string

    // constructor(name002: string) {
    //     this.name002 = name002
    // }//抽象方法不能有具体构造和实现

    // sayHi002() {
    //     console.log('hello:' + this.name002)
    // }
    abstract sayHello(): any;
    // abstract sayHello1();

}

class Cat extends Animal02 {
    name002: string
    constructor(name002: string) {
        super()
        this.name002 = name002
    }
    sayHello() {
        console.log("sayHello")
    }

    // constructor(name002: string) {
    //     super(name002)
    // }
    // sayHi002(): void {
    //     console.log('cat:' + this.name002)
    // }
}

let cat01 = new Cat("Tom")
console.log(cat01.name002)
cat01.sayHello()
// console.log(cat01.sayHello())

