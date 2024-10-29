import React from "react";

export const RestaurentMenuItemCard = ({ itemName, price, description }) => {
  
  return (
    <div className="menu-card">
      <h3>{itemName}</h3>
      <h4>$ {price / 1000}</h4>
      <p>{description}</p>
    </div>
  );
};
