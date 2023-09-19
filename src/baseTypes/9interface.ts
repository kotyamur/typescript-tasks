//Interface підтримує об'єднання через оголошення з тим самим ім'ям.
//У випадку з типом нам довелося б використовувати intersection (&).

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

let dog: Animal = {
  name: "Fido",
  age: 5,
};

//розширити один інтерфейс іншим, у яких різні імена, нам потрібно використовувати оператор extends:
interface Dog extends Animal {
  bark: string;
}
//За допомогою ключового слова 'implements' ми встановлюємо обов'язкові властивості для класу
class MyDog implements Dog {
  name = "Fido";
  bark = "Woof!";
  age: 5;
}

//Інтерфейси переважно призначені для опису класів.
//Через це вони не можуть зберігати в собі примітивні значення, як це може робити Type,
//а також масиви та інші структури даних, які не є об'єктами.
// Ми просто не зможемо їх туди зберегти, оскільки за синтаксисом відразу йдуть фігурні дужки { }.

interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animals implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animal = new Animals();