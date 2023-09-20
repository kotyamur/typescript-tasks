/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.  Pick<AllType, 'color' | 'name'>
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type Top = Pick<AllType, "color" | "name">;
type Bottom = Pick<AllType, "position" | "weight">;

function compare(top: Top, bottom: Bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
/////////2 v
function compare2<T extends Pick<AllType, "color" | "name">, B extends Pick<AllType, "position" | "weight">>(top: T, bottom: B): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};