/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: Days) => {
  console.log(day === Days.SATURDAY || day === Days.SUNDAY);
}

isWeekend(Days.FRIDAY);
isWeekend(Days.SATURDAY);
isWeekend(Days.SUNDAY);
isWeekend(Days.MONDAY);
isWeekend(Days.WEDNESDY);
isWeekend(Days.THURSDAY);
isWeekend(Days.TUESDAY);

