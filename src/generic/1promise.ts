/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

const getPromise: Promise<Array<string | number>> = new Promise((resolve) => {
  resolve(["Text", 50]);
});


getPromise.then((data) => {
  console.log(data);
});

function getPromise4(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise4().then((data) => {
  console.log(data);
});
  
////////////////////////////////////////////////////////////////

function getPromise2<T>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise2<Array<string | number>>().then((data) => {
  console.log(data); 
});

