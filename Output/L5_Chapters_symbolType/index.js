"use strict";
console.log("symbol data type");
var sym = Symbol();
var sym2 = Symbol();
console.log(sym == sym2);
var sym3 = Symbol("abc");
var sym4 = Symbol("abc");
console.log(sym3 == sym4);
var dId = Symbol();
const obj = {
    [dId]: 100,
    name: "rahul",
};
console.log(obj[dId]);
