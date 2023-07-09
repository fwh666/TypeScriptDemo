class persion {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(param: string) {
        return 'hi: ' + param
    }
}

let persionN = new persion("zhangsan", 19)
console.log(persionN.sayHi("lisi"))