//基础
function createArray(vlaue: number, count: number) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = vlaue;
    }
    return result;
}

//泛型
function createArrays<T>(value: T, count: number) {
    let result: T[] = [];
    for (let i = 0; i < count; i++) {
        result[i] = value;
    }
    return result;
}

//demo
console.log(createArray(1, 3))

console.log(createArrays("001", 3))
console.log(createArrays(true, 3))
