"use strict";
console.log("never types");
function neverType() {
    while (true) {
        console.log("hello world");
    }
}
function simpleNever() {
    throw new Error("something went wrong");
}
