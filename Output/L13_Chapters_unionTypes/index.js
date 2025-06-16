"use strict";
// console.log(
//   " union type allows a variable to hold more than one type of value. You can use the | (pipe) symbol to define union types."
// );
function unionTypes(name) {
    if (typeof name == "string") {
        return name;
    }
    if (typeof name == "number") {
        return name;
    }
    if (typeof name == "boolean") {
        return name;
    }
}
const test = unionTypes("hello world");
const test1 = unionTypes(99);
const test2 = unionTypes(false);
console.log(test);
console.log(test1);
console.log(test2);
