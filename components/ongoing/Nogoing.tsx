import React from "react";

export default function Nogoing() {
  return (
    <div className="flex gap-4">
      <span className="text-[#585A66] font-medium text-sm">11AM</span>
      <div className="flex w-full items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
        <hr className=" w-full text-primary" />
      </div>
    </div>
  );
}
