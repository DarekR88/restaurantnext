"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [isActiveFood, setIsActiveFood] = useState(true);
  const [isActiveWine, setIsActiveWine] = useState(false);

  const handleClickFood = () => {
    setIsActiveFood(true)
    setIsActiveWine(false)
  };

  const handleClickWine = () => {
    setIsActiveWine(true)
    setIsActiveFood(false)
  };

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-center">
        <button
          onClick={handleClickFood}
          className={`${isActiveFood ? "border-b-[3px] border-black" : "border-b-0"}`}
        >
          Food
        </button>
        <div className="relative h-[40px] w-[3px] bg-black"></div>
        <button
          onClick={handleClickWine}
          className={`${isActiveWine ? "border-b-[3px] border-black" : "border-b-0"}`}
        >
          Wine
        </button>
      </div>
    </>
  );
}
