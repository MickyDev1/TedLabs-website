import React from "react";

export default function Button({ text, className }) {
  return (
    <button
      className={`px-6 py-4.5 bg-primary cursor-pointer rounded-[50px] text-white font-medium text-base leading-[100%] hover:bg-primary/90 ${className}`}
    >
      {text}
    </button>
  );
}
