"use strict";
var Data;
(function (Data) {
    Data[Data["first"] = 1] = "first";
    Data[Data["second"] = 2] = "second";
    Data[Data["third"] = 3] = "third";
})(Data || (Data = {}));
console.log(Data.first);
let directions = [0 /* Directions.Up */, 1 /* Directions.Down */, 2 /* Directions.Left */, 3 /* Directions.Right */];
console.log(directions);
