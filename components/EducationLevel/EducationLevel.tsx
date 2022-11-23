import React from "react";
import { ILevel } from "../../interfaces/Level";
import Levels from "./Levels";

const Fetures: ILevel[] = [
  {
    featurs: {
      border: "border-[#FDD563]",
      background: "bg-[#FDD563]",
      level: "Year 7-9",
      icon: "/levels/Y7-9.svg",
    },
  },
  {
    featurs: {
      border: "border-[#8BE38B]",
      background: "bg-[#8BE38B]",
      level: "Year 10-11",
      icon: "/levels/Y10-11.svg",
    },
  },
  {
    featurs: {
      border: "border-[#B3B4F7]",
      background: "bg-[#B3B4F7]",
      level: "Year 12-13",
      icon: "/levels/Y12-13.svg",
    },
  },
  {
    featurs: {
      border: "border-[#C4D7FF]",
      background: "bg-[#C4D7FF]",
      level: "Bachelors",
      icon: "/levels/bachelor.svg",
    },
  },
  {
    featurs: {
      border: "border-[#E48FFF]",
      background: "bg-[#E48FFF]",
      level: "Masters",
      icon: "/levels/master.svg",
    },
  },
];
const backgrounds: string[] = ["bg-[#FDD563]", "bg-[#E48FFF]"];

const levels = Fetures.map((feature: ILevel, index) => (
  <Levels key={index} featurs={feature.featurs} />
));

export default function EducationLevelComp() {
  return (
    <div className="h-screen border border-[#E4EDFF] bg-[#F5FBFF] mx-auto font-body">
      <div className="gap-4 flex text-primaryText flex-col mt-8 mx-6">
        <h1 className="text-2xl font-black">Education Level</h1>
        <p className="text-sm font-medium">
          Create a unique emotional story that describes better than words
        </p>
        <div className="flex flex-col gap-4">{levels}</div>
        <div className="w-full flex justify-end">
          <div className="w-1/5 text-lg text-right font-bold text-primary p-0">
            Skip
          </div>
        </div>
      </div>
    </div>
  );
}
