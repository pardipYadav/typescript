var _a;
console.log("symbol data type");
var sym = Symbol();
var sym2 = Symbol();
console.log(sym == sym2);
var sym3 = Symbol("abc");
var sym4 = Symbol("abc");
console.log(sym3 == sym4);
var dId = Symbol();
var obj = (_a = {},
    _a[dId] = 100,
    _a.name = "rahul",
    _a);
console.log(obj[dId]);
