import React from "react";

export const RestaurentMenuItemCard = ({ itemName, price, description }) => {
  
  return (
    <div className="menu-card flex flex-col w-[70rem] h-auto border rounded-l border-slate-900 bg-slate-50 m-2 p-2">
      <h3 className="text-[22px] font-bold ">{itemName}</h3>
      <h4 className="text-base font-medium">₹ {price / 1000}</h4>
      <p className="text-base font-normal">{description}</p>
    </div>
  );
};
