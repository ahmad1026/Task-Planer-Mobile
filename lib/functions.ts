export const getMonth = (month: number) => {
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return Month[month];
};



export const getDayesMonth = (today: Date) => {
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = today;
  const thisMonth = today.getMonth();
  const days = [];
  date.setDate(1);
  days.push({
    day: Days[date.getDay()],
    dayNum: date.getDate(),
    month:date.getMonth(),
    year:date.getFullYear()
  });
  while (thisMonth == date.getMonth()) {
    date.setDate(date.getDate() + 1);
    days.push({
      day: Days[date.getDay()],
      dayNum: date.getDate(),
      month:date.getMonth(),
      year:date.getFullYear()
    });
  }
  days.pop();

  return days
};
