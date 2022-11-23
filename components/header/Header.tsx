import React from "react";
import DayCard from "./DayCard";

export default function Header() {
  return (
    <div>
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <img className="w-7" src="/utils/Vector.svg" alt="" />
          <h1 className="font-bold text-primaryText">Ahmad</h1>
          <img className="w-7" src="/utils/hamburgerMenu.svg" alt="" />
        </div>
        <div className="flex justify-between items-end mt-8">
          <div className="flex gap-2 text-[#585A66]">
            <img className="w-4" src="/utils/ArrowLeft.svg" alt="" />
            <span className="">Mar</span>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl font-bold text-primaryText">April</h1>
            <div className="w-8 h-8 bg-white flex items-center justify-center border border-[#C4D7FF] rounded-lg">
              <img className="w-4" src="/utils/appointments.svg" alt="" />
            </div>
          </div>
          <div className="flex gap-2 text-[#585A66]">
            <span className="">May</span>
            <img className="w-4 rotate-180" src="/utils/ArrowLeft.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-scroll pl-4 py-4">
        <DayCard/>
        <DayCard/>
        <DayCard/>
        <DayCard/>
        <DayCard/>
        <DayCard/>
      </div>
    </div>
  );
}
