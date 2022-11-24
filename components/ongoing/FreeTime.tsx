import React from "react";

export default function FreeTime() {
  return (
    <div className="flex flex-col relative gap-20">
      <div>
        <span className="text-[rgb(88,90,102)] font-medium text-sm">10AM</span>
        <hr className="border-dashed border-[#C4D7FF]" />
      </div>
      <div className="w-3/4 bg-[#F5FBFF] border border-dashed border-[#E4EDFF] rounded-xl py-6 px-20 absolute right-0 bottom-2">
        <div className="text-center text-primary py-2 bg-white font-bold border border-primary rounded-lg">+Add Plan</div>
      </div>
      <div>
        <span className="text-[#585A66] font-medium text-sm">10AM</span>
        <hr className="border-dashed border-[#C4D7FF]" />
      </div>
    </div>
  );
}
