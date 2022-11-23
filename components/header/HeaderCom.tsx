import React from "react";

export default function HeaderCom() {
  return (
    <div className="flex justify-between items-center mx-4 ">
      <img className="w-7" src="/utils/Vector.svg" alt="" />
      <h1 className="font-bold text-primaryText">Ahmad</h1>
      <img className="w-7" src="/utils/hamburgerMenu.svg" alt="" />
    </div>
  );
}
