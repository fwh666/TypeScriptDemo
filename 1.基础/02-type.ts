/**
 * 五种基本数据类型
 */
let num: number;

num = 10;
// num="hdh"

function test(param: string) {
    return param;
}

test('zhagnsan')


let flag: boolean = false;
flag = true;

let a: number = 10
let a1: number = 0b1010


//----------------------------------------------------
/**
 * 数组类型
 * 
 */

let nums: number[] = [1, 2, 3];

let fibonacci: Array<number> = [1, 1, 2, 3, 5];

let nums01: Array<number> = [2, 3, 4, 4];

/**
 * 对象类型
 */

/**
 * any &  类型推断
 */

let g;
g = 123;
g = "123"
g = true;
console.log(g)


let f: any = 1;
f = 'shdf'
f = true



