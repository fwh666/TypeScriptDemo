enum Data {
    first = 1,
    second,
    third
}

console.log(Data.first)

//常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions)