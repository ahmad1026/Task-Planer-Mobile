import React, { useEffect, useState } from "react";
import { getMonth, getDayesMonth } from "../../lib/functions";
import DayCard from "./DayCard";

export default function Calendar() {
  const nowDate = new Date();
  const [Today, setToday] = useState({
    Month: getMonth(nowDate.getMonth()),
    lastMonth: getMonth(nowDate.getMonth() - 1),
    nextMonth: getMonth(nowDate.getMonth() + 1),
    monthDays: getDayesMonth(nowDate),
  });
  useEffect(()=>{


  },[Today.monthDays])
  return (
    <div className="">
      <div className="flex justify-between items-end mt-8 mx-4">
        <div className="flex gap-2 text-[#585A66]">
          <img className="w-4" src="/utils/ArrowLeft.svg" alt="" />
          <span className="">{Today.lastMonth.substring(0, 3)}</span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold text-primaryText">{Today.Month}</h1>
          <div className="w-8 h-8 bg-white flex items-center justify-center border border-[#C4D7FF] rounded-lg">
            <img className="w-4" src="/utils/appointments.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-2 text-[#585A66]">
          <span className="">{Today.nextMonth.substring(0, 3)}</span>
          <img className="w-4 rotate-180" src="/utils/ArrowLeft.svg" alt="" />
        </div>
      </div>
      <div className="flex gap-3 overflow-x-scroll pl-4 py-4">
        {
            Today.monthDays.map((day,index)=>{
                return (
                    <DayCard key={index} day={day.day} dayNum={day.dayNum} />
                )
            })

        }
      </div>
    </div>
  );
}
