"use strict";
//基础
function createArray(vlaue, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = vlaue;
    }
    return result;
}
//泛型
function createArrays(value, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = value;
    }
    return result;
}
//demo
console.log(createArray(1, 3));
console.log(createArrays("001", 3));
console.log(createArrays(true, 3));
