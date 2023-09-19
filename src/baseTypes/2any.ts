///Any

let anything: any = -20;
anything = 'Text';
anything = {};

let num: number;
//Основною проблемою використання типу any в TypeScript є відсутність суворої типізації. 
//У цьому випадку TypeScript не викличе помилку на етапі компіляції,
/// адже any потенційно може являти собою будь - який тип даних.
//Навіть якщо з коду зрозуміло, що notSure — це об'єкт, а не число.
num = anything;

export { };


const fetchUserData = (id: string, callback: (data: any) => void): void => {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: "Tom" };

  callback(responseData);
}

// Використання функції:
fetchUserData("123", (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});