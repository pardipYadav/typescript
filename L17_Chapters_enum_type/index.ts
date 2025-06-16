console.log("enum type");
enum WhoType {
  student = "pardeep",
  teacher = "simran",
  managment = "management",
  labStaff = "result",
}
var who: WhoType = WhoType.teacher;

enum Roles {
  admin,
  manager,
  qa,
  developer,
  user,
}

var userRole: Roles = Roles.developer;
console.log(userRole);
