import React from "react";

export default function ButtomNavbar() {
  return (
    <div className="w-full border-t border-[#E4EDFF] bg-white fixed bottom-0 flex px-3 py-2">
      <div className="flex w-1/5 items-center flex-col">
        <img className="w-6" src="/bottomNav/appointments.svg" alt="" />
        <span className="text-primary text-xs">Agenda</span>
      </div>
      <div className="flex w-1/5 items-center flex-col">
        <img className="w-6" src="/bottomNav/Vector.svg" alt="" />
        <span className="text-xs">Tasks</span>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <div className="w-10 h-10 border shadow-lg rounded-lg border-[#E4EDFF] flex items-center justify-center flex-col">
          <img className="w-6" src="/bottomNav/qr-code.svg" alt="" />
        </div>
      </div>
      <div className="flex w-1/5 items-center flex-col">
        <img className="w-6" src="/bottomNav/bell.svg" alt="" />
        <span className="text-xs">Notification</span>
      </div>
      <div className="flex w-1/5 items-center flex-col">
        <img className="w-6" src="/bottomNav/search.svg" alt="" />
        <span className="text-xs">Search</span>
      </div>
    </div>
  );
}
