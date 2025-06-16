console.log("never types");

function neverType(): never {
  while (true) {
    console.log("hello world");
  }
}

function simpleNever(): never {
  throw new Error("something went wrong");
}
