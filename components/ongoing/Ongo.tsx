import React from "react";

export default function Ongo() {
  return (
    <div>
      <span className="text-[#585A66] font-medium text-sm">12AM</span>
      <div className="flex border-t w-2/3 border-b border-dashed border-[#C4D7FF] relative flex-col gap-8">
        <div></div>
        <div>
          <span className="text-[#585A66] font-medium text-sm">1PM</span>
        </div>
        <div className="w-56 h-24 bg-[#FFB017] flex flex-col justify-between text-white  border absolute -right-20 -translate-y-1/2 top-1/2 rounded-xl p-2 leading-tight">
          <div className="leading-none">
            <h1 className="text-sm font-bold">Math</h1>
            <span className="text-xs">Saber & Oro</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="relative">
              <img
                className="w-8 rounded-full border-2 border-white"
                src="/users/person4.jpg"
                alt=""
              />
              <img
                className="w-8 rounded-full absolute left-5 top-0 border-2 border-white"
                src="/users/person4.jpg"
                alt=""
              />
            </div>
            <span className="text-xs">9:00AM - 10:00AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
