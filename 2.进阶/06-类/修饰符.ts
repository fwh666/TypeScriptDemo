class Fwh03 {
    public name03: string
    protected name04: string
    private name05: string

    constructor(name03: string, name04: string, name05: string) {
        this.name03 = name03
        this.name04 = name04
        this.name05 = name05
    }
}

class Fwh003 extends Fwh03 {
    play() {
        console.log(this.name03)
        console.log(this.name04)
        // console.log(this.name05)//私有属性的不能使用
    }
}

//Demo
let fwh03 = new Fwh03("zhangsan", "zhangsan", "zhangsan")
console.log(fwh03)

let fwh003 = new Fwh003("zhangsan", "zhangsan", "zhangsan")
console.log(fwh003.play)
