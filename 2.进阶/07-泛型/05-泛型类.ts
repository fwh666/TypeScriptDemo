class people<T>{
    name: string
    age: T
    constructor(name: string, age: T) {
        this.name = name
        this.age = age
    }
}

// let peo1 = people: string("zhang", 18)
//使用的时候再定义类型
let po1 = new people<string>("zhang", "12")
let po2 = new people<number>("li", 19)

console.log(po1.age);
