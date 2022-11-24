import React from "react";
import { IDay } from "../../interfaces/ICalendar";

const DayCard: React.FC<IDay> = ({ day, dayNum, month, year }) => {
  const pastDate = () => {
    const today = new Date();

    if (
      year == today.getFullYear() &&
      month == today.getMonth() &&
      dayNum == today.getDate()
    ) {
      return "same";
    } else if (year > today.getFullYear()) {
      return "feuture";
    } else if (year === today.getFullYear()) {
      if (month > today.getMonth()) {
        return "feuture";
      } else if (month == today.getMonth()) {
        if (dayNum > today.getDate()) {
          return "feuture";
        } else {
          return "past";
        }
      } else {
        return "past";
      }
    } else {
      return "past";
    }
  };


  return (
    <div
      className={`px-6 py-8 flex flex-col ${
        pastDate() === "same" ? "bg-primary" : null
      }  items-center shadow-md bg-white rounded-lg`}
    >
      <span
        className={`text-3xl font-bold ${
          pastDate() === "feuture"
            ? "text-[#585A66]"
            : pastDate() === "same"
            ? "text-white"
            : "text-[#9A9A9A]"
        }`}
      >
        {dayNum}
      </span>
      <span
        className={`font-semibold ${
          pastDate() === "feuture"
            ? "text-[#585A66]"
            : pastDate() === "same"
            ? "text-white"
            : "text-[#9A9A9A]"
        }`}
      >
        {day}
      </span>
    </div>
  );
};

export default DayCard;
