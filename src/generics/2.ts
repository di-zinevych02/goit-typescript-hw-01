// Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
type AllType = 
 Pick<AllType, "name" | "position" | "color" | "weight">;

function compare (top:AllType, bottom:AllType): AllType{
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
