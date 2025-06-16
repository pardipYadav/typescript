console.log("objects type");
var obj_type: { name: string; age: number; company: string } = {
  name: "rahul",
  age: 20,
  company: "abc",
};
console.log(obj_type);

var obje_type2: {
  [key: string]: string | number | undefined | boolean;
} = {
  name: "rahul",
  age: 20,
  company: "abs",
  status: false,
};
console.log(obje_type2);

var mutli_obj: {
  name: string;
  age: number;
  company: string;
  address: {};
} = {
  name: "rahul",
  age: 20,
  company: "abx",
  address: {
    street: "abc",
    galino: "annd",
    houseno: "3223 hajdbasdf",
  },
};

console.log(mutli_obj);

var mutli_obj2: {
  name: string;
  age: 20;
  company: string;
  address: {
    street: string;
    galino: string;
    houseno: string;
  };
} = {
  name: "pardeep",
  age: 20,
  company: "abc",
  address: {
    street: "jdjd0",
    galino: "sdf",
    houseno: "sdfsdf",
  },
};

console.log(mutli_obj2);
