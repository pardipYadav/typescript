console.log("function return type");

function fruits(): string | number {
  return 20;
}

function simple(): true {
  return true;
}

function complex(): string | number | boolean {
  let data = 10;
  let name = "hello world";
  let type = "age";
  if (type == "age") {
    return name;
  } else {
    return data;
  }
}

var check = complex();
console.log(check);

function forAnyType(): any {
  //   return "hello";
  //   return 90;
  return false;
}
