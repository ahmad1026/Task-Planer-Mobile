import React from "react";

export default function GetStarted() {
  return (
    <div className="container flex flex-col bg-[#F5FBFF] h-screen border border-[#E4EDFF] bor mx-auto font-body">
      <div className="mt-20 flex items-center justify-center">
        <img src="/OBJECTS.svg" alt="" />
      </div>
      <div className="w-full flex flex-col justify-between items-center flex-1 border-[#E4EDFF] bg-white rounded-t-3xl border-t text-center py-8 px-6 font-bold text-primaryText mt-8">
        <div className="flex justify-center items-center gap-1">
          <span className="w-4 h-1 bg-primary rounded-full"></span>
          <span className="w-1 h-1 bg-[#2FD1C5] rounded-full"></span>
          <span className="w-1 h-1 bg-[#2FD1C5] rounded-full"></span>
        </div>
        <div className="text-primaryText mt-12 flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold">Task Manager</h1>
          <p className="w-3/4 mx-auto font-light">
            Create a unique emotional story that describes better than words
          </p>
        </div>
        <div className="w-3/6 bg-primary rounded-lg py-3 text-white text-center">
          Get Started
        </div>
      </div>
    </div>
  );
}
