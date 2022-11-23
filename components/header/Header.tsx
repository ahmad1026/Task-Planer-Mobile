import React from "react";
import Calendar from "./Calendar";
import HeaderCom from "./HeaderCom";

export default function Header() {
  return (
    <div className="bg-[#e0f1fc] pt-4">
      <HeaderCom/>
      <Calendar/>
    </div>
  );
}
