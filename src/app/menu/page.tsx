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
          className={`${isActiveFood ? "transition ease-in-out border-b-[3px] border-black border-opacity-100 duration-500" : "transition ease-in-out border-b-[3px] border-opacity-25 duration-500"}`}
        >
          Food
        </button>
        <div className="relative h-[40px] w-[3px] bg-black"></div>
        <button
          onClick={handleClickWine}
          className={`${isActiveWine ? "transition ease-in-out border-b-[3px] border-black border-opacity-100 duration-500" : "transition ease-in-out border-b-[3px] border-opacity-25 duration-500"}`}
        >
          Wine
        </button>
      </div>
    </>
  );
}
