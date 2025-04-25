enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
};


const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || DayOfWeek.Sunday
};

//day: DayOfWeek — аргумент функції обов’язково має бути з переліку DayOfWeek.

//: boolean — функція повертає булеве значення (true для вихідних, false для робочих днів)

//DayOfWeek.Saturday та DayOfWeek.Sunday — це вихідні дні
