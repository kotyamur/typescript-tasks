/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

//Return type 
//void функції не повертають значення, в callback-функціях або функціях зворотного виклику
const showMessage = (message: string): void => {
  console.log(message);
}

const calcNum = (num1: number, num2: number): number => {
  return num1 + num2;
}
//коли функція ніколи не закінчується та нічого не повертає -- тип never 
const customError = (): never => {
  throw new Error('Error');
}

// Функція з нескінченним циклом
function infiniteLoop(): never {
  while (true) {}
}

//////////////////////////////////////////////////////////////Function Type
//1
let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"


//2
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);



//examples
type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']