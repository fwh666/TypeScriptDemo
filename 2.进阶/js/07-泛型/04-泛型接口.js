"use strict";
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
let getArray = function createArray02(value, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = value;
    }
    return result;
};
//指定了string类型
console.log(getArray("123", 3));
let p1 = {
    name: "123"
};
let p2 = {
    name: 123
};
console.log(p1.name);
console.log(p2.name);
