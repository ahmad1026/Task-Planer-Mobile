import React from "react";
import FreeTime from "./FreeTime";
import Nogoing from "./Nogoing";
import Ongo from "./Ongo";

export default function Ongoing() {
  return (
    <div className="w-full bg-white pt-4 px-3">
      <h1 className="text-lg font-bold">Ongoing</h1>
      <div className="mt-4 flex flex-col gap-10 pb-16">
        <Ongo/>
        <Nogoing/>
        <Ongo/>
        <Nogoing/>
        <Ongo/>
        <FreeTime/>
      </div>
    </div>
  );
}
