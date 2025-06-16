console.log("array types");

var users: string[] = ["one", "two", "three"];
var marks: number[] = [50, 60, 70, 80];

var std: Array<string> = ["one", "two", "three"];
std.push("four");
marks.push(666);

var clgName: ReadonlyArray<string> = ["lpu", "cu", "pu"];

console.log(marks);
