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
    <div className="res-cards-container">
      <div className="res-card">
      <img alt={`${name} - ${locality}`} src={imageUrl} />
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h5>Avg Rating: {avgRating}</h5>
        <h5>Delivery Time: {deliveryTime} mins</h5>
        <h5>Cost for Two: {costForTwo}</h5>
        <p>Cuisines: {cuisines.join(", ")}</p>
      </div>
    </div>
  );
}
