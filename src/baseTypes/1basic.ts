// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

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

export { age, name, toggle, empty, notInitialize, callback };
