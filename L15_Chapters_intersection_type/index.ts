console.log("intersection type");
// type personAT = { name: string };
// type personBT = { age: number };
// type personMix = personAT & personBT;

interface personAT {
  name: string;
}
interface personBT {
  age: number;
}
type personMix = personAT & personBT;

var personAData: personAT = {
  name: "hello world",
};

var personData2: personBT = {
  age: 25,
};

var mixPersion: personMix = {
  name: "hellow orl",
  age: 25,
};

console.log("personAData", personAData);
console.log("personData2", personData2);
console.log("mixPersion", mixPersion);
