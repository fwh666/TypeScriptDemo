//泛型接口形式
interface IArray<T> {
    //一、
    // (value: T, count: number): T[]
    //二\
    (value: T, count: number): Array<T>
}

// interface IArray {
//     //一、
//     // (value: T, count: number): T[]
//     //二\
//     <T>(value: T, count: number): Array<T>
// }

//一、
// function createArray02<T>(value: T, count: number): T[] {
//     let result: T[] = []
//     for (let i = 0; i < count; i++) {
//         result[i] = value;
//     }
//     return result;
// }
//二、接口
// let getArray: IArray = function createArray02<T>(value: T, count: number): T[] {
//     let result: T[] = []
//     for (let i = 0; i < count; i++) {
//         result[i] = value;
//     }
//     return result;
// }
//三、接口
let getArray: IArray<string> = function createArray02<T>(value: T, count: number): T[] {
    let result: T[] = []
    for (let i = 0; i < count; i++) {
        result[i] = value;
    }
    return result;
}
//指定了string类型
console.log(getArray("123", 3));



//泛型接口02
interface Ipersion<T> {
    name: T
}

let p1: Ipersion<string> = {
    name: "123"
}
let p2: Ipersion<number> = {
    name: 123
}
console.log(p1.name);
console.log(p2.name);
