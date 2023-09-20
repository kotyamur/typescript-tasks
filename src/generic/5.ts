/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання:
const pair1: KeyValuePair<string, number> = { key: "age", value: 30 };
const pair2: KeyValuePair<string, string> = { key: "name", value: "John" };

export {};