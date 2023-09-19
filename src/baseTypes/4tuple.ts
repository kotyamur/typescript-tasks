/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
//Tuple
//дозволяє визначити масив з фіксованою кількістю елементів, типи яких відомі, але не обов'язково повинні бути однаковими

let person: [string, number];
person = ['Max', 21];

export { };



let tuple: [string, ...number[]];

tuple = ['hello', 42, 100, 200]; // OK