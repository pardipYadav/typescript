console.log("interface type");
interface Info {
  name: string;
  age: number;
  college: string;
}

interface teacherType extends Info {
  subject: string;
}
var student: Info = {
  name: "pardeep",
  age: 25,
  college: "lpu",
};
var teacher: teacherType = {
  name: "parr",
  age: 58,
  college: "lpuuuuu",
  subject: "math",
};

console.log("student=", student);
console.log("teacher=", teacher);
