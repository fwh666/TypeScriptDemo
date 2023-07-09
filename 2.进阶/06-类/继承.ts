class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(param: string) {
        console.log('hi:' + param)
        return "hi: " + param
    }
}
 

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

//Demo
const a = new Animal("猫", 3)
a.sayHi("maomao")

const b = new Dog("狗", 4)
b.sayHi("狗狗")
