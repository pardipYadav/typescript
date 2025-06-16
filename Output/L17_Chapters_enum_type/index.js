"use strict";
console.log("enum type");
var WhoType;
(function (WhoType) {
    WhoType["student"] = "pardeep";
    WhoType["teacher"] = "simran";
    WhoType["managment"] = "management";
    WhoType["labStaff"] = "result";
})(WhoType || (WhoType = {}));
var who = WhoType.teacher;
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["qa"] = 2] = "qa";
    Roles[Roles["developer"] = 3] = "developer";
    Roles[Roles["user"] = 4] = "user";
})(Roles || (Roles = {}));
var userRole = Roles.developer;
console.log(userRole);
