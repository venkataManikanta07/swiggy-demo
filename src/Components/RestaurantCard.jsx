import React from "react";

export default function RestaurantCard({
  name,
  image,
  locality,
  avgRating,
  cuisines,
  deliveryTime,
  costForTwo,
}) {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`;
  return (
    <div className="res-cards-container w-56 h-[520px] border m-2 p-2 rounded-md">
      <img alt={`${name} - ${locality}`} src={imageUrl} className="w-56 h-60  object-cover border rounded-md" />
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <h4 className="text-lg font-medium mt-[5px]">{locality}</h4>
        <h4 className="text-base font-medium mt-[5px]">Avg Rating: {avgRating}</h4>
        <h4 className="text-base font-medium mt-[5px]">Delivery Time: {deliveryTime} mins</h4>
        <h4 className="text-base font-medium mt-[5px]">Cost for Two: {costForTwo}</h4>
        <p className="text-base font-medium mt-[5px]">Cuisines: {cuisines.join(", ")}</p>
    </div>
  );
}
