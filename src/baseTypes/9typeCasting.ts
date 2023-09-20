//Type Casting (або Type Conversion) використовується для перетворення об'єкта одного типу на об'єкт іншого типу.
//TypeScript використовує два синтаксичні підходи для типового приведення:
//кутові дужки <> та оператор as.

//коли використовується JSX (React), тільки оператор as 

let someValue: unknown = "this is a string";

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

const input = <HTMLInputElement>document.getElementById("inputEmail");
///or
const input1 = document.getElementById("inputEmail") as HTMLInputElement;

//Index Properties

type Person = {
  name: string;
  [x: string]: string;
};

const user: Person = {
  name: "Alex",
  gender: "MAN",
  country: "Ukraine",
};

//or
type User2 = {
  idd: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

let users2: Users = {};

let user2: User2 = {
  idd: "1",
  name: "Alex",
  email: "alex@example.com",
};

users[user.idd] = user;
