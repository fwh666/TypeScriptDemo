//泛型交换，多个功能，返回数组交换类型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

// swap([7, 'seven']); // ['seven', 7]
console.log(swap([7, 'seven']))
