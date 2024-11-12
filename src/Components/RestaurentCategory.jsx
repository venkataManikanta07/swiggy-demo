import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import CategoryItems from "./CategoryItems";

function RestaurentCategory({ category, showIndex, onClick }) {
  return (
    <div className="w-6/12  bg-gray-100 mb-4 p-2">
      <div className="flex justify-between cursor-pointer" onClick={onClick}>
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length})
        </span>
        <span>
          {showIndex ? (
            <FaArrowUp className="h-7 font-bold" />
          ) : (
            <FaArrowDown className="h-7 font-bold" />
          )}{" "}
        </span>
      </div>
      {showIndex && <CategoryItems itemCards={category.itemCards} />}
    </div>
  );
}

export default RestaurentCategory;
