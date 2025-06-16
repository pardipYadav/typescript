interface personAT {
    name: string;
}
interface personBT {
    age: number;
}
type personMix = personAT & personBT;
declare var personAData: personAT;
declare var personData2: personBT;
declare var mixPersion: personMix;
