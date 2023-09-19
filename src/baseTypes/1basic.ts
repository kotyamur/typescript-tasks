// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінни

/////////////////////////////////////////////basic

//number
let age: number = 50;
//string
let name: string = 'Max';
//boolean
let toggle: boolean = true;
//null
let empty: null = null;
//undefined
let notInitialize: undefined;

//передача в аргумент функції тип даних
let callback = (a: number) => {
  return 100 + a;
};

///////////////////////////////////////////////Складні типи

//////////////////////////////////////////////////////////object
const obj: object = {}; //const obj: {} = {};

let user: { name: string; age: number } = {
  name: "Tom",
  age: 30,
};
// more comfortable type or interface
type User = {
  name: string;
  age: number;
};
// or
interface User1 {
  name: string;
  age: number;
}

let user2: User = {
  name: "Tom",
  age: 30,
};

/////////////////////////////////////////////////Array

let arrString: string[] = ["Text", "Text"];

let arrNumber: number[] = [3, 1];

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

let mixed: (number | string)[] = [1, "two"];
//generic
let numbers: Array<number> = [1, 2, 3, 4, 5];

type User2 = {
  name: string;
  age: number;
};

let users: User2[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

let arrAny: any[] = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

export { age, name, toggle, empty, notInitialize, callback };
