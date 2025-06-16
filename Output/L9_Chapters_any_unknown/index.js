"use strict";
console.log("any unkown type");
var value = "rahul";
value = 100;
value = ["rahul"];
value = { name: "pardeep" };
console.log(value);
var value_any;
value_any = "hello world";
value_any = ["hello world"];
value_any = 5522;
value_any = true;
console.log(value_any);
var value_unknown;
value_unknown = ["ranil"];
value_unknown = "rahul";
if (typeof value_unknown == "string")
    console.log(value_unknown.toUpperCase());
