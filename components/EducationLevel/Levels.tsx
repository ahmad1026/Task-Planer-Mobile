import React from "react";
import { ILevel } from "../../interfaces/ILevel";


const Levels: React.FC<ILevel> = ({featurs}) => {
    
  return (
    <div className={`w-full border flex gap-4 items-center ${featurs.border} rounded-lg p-2`}>
      <div className={`w-16 h-16 flex items-center justify-center ${featurs.background} rounded-xl`}>
        <div className={`w-12 h-12 rounded-full bg-white`}>
            <img src={featurs.icon} alt="" />
        </div>
      </div>
      <h1 className="text-lg font-bold">{featurs.level}</h1>
    </div>
  );
};

export default Levels
