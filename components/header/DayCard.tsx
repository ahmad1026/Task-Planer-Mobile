import React from "react";

interface IDay {
  day: string;
  dayNum: number;
}

const DayCard: React.FC<IDay> = ({ day, dayNum }) => {
  return (
    <div className={`px-6 py-8 flex flex-col ${(new Date()).getDate() === dayNum ?  'bg-primary' : null}  items-center shadow-md bg-white rounded-lg`}>
      <span className={`text-3xl font-bold ${ dayNum > (new Date()).getDate() ? 'text-[#585A66]' : (new Date()).getDate() === dayNum ? 'text-white' : 'text-[#9A9A9A]'}`}>{dayNum}</span>
      <span className={`font-semibold ${ dayNum > (new Date()).getDate() ? 'text-[#585A66]' : (new Date()).getDate() === dayNum ? 'text-white' : 'text-[#9A9A9A]'}`}>{day}</span>
    </div>
  );
};



export default DayCard
