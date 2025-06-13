"use strict";
console.log("function return type");
function fruits() {
    return 20;
}
function simple() {
    return true;
}
function complex() {
    let data = 10;
    let name = "hello world";
    let type = "age";
    if (type == "age") {
        return name;
    }
    else {
        return data;
    }
}
var check = complex();
console.log(check);
function forAnyType() {
    //   return "hello";
    //   return 90;
    return false;
}
