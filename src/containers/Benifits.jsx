import React from "react";
import ValueSpot from "../components/ValueSpot";
import { benefits } from "../data/benefits.json";

function Benefits() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-[200px] max-w-[1240px] px-[48px]">
        {benefits.map((benefit, i) => (
          <ValueSpot key={i} index={i} {...benefit} />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
