import React from "react";
import { useState } from "react";
import { selector } from ".";

export default function StackSelector() {
  const [selected, setSelected] = useState(selector[0]?.id);

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center max-w-[1300px] w-full mx-auto my-10">
      {/* Selector */}
      <div className="flex items-center justify-center gap-x-10">
        {selector.map((item) => (
          <button
            key={item?.id}
            onClick={() => setSelected(item?.id)}
            className={`px-5 py-3 font-medium text-base leading-[100%] hover:bg-primary/90 hover:text-white transition-all duration-300 rounded-full cursor-pointer ${
              selected === item?.id ? "bg-primary text-white" : ""
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      {/* Tools/Stacks */}
      <div className="flex flex-wrap max-w-[900px] w-full items-center justify-center gap-x-10 gap-y-5">
        {selector
          .filter((item) => item?.id === selected)
          .map((item) =>
            item?.images?.map((image) => (
              <div
                key={image?.id}
                className="flex flex-col items-center gap-y-3 w-[87px] text-center"
              >
                <img src={image?.image} alt={image?.name} className="h-12.5" />
                <span className="h-8 flex items-center justify-center leading-4.5">
                  {image?.name}
                </span>
              </div>
            ))
          )}
      </div>
    </div>
  );
}
