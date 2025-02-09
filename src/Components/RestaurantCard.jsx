import React from "react";
import { CDN_IMG_id } from "../utils/constants";

function RestaurantCard({ resData }) {
  const {
    name = resData.name,
    image = resData.cloudinaryImageId,
    locality = resData.locality,
    avgRating = resData.avgRating,
    deliveryTime = resData.deliveryTime,
    costForTwo = resData.costForTwo,
    cuisines = resData.cuisines,
  } = resData;
  const imageUrl = CDN_IMG_id + image;

  return (
    <div className="res-cards-container w-56 h-[520px] border m-2 p-2 rounded-md">
      <img
        alt={`${name} - ${locality}`}
        src={imageUrl}
        className="w-56 h-60  object-cover border rounded-md"
      />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <h4 className="text-lg font-medium mt-[5px]">{locality}</h4>
      <h4 className="text-base font-medium mt-[5px]">
        Avg Rating: {avgRating}
      </h4>
      <h4 className="text-base font-medium mt-[5px]">
        Delivery Time: {deliveryTime} mins
      </h4>
      <h4 className="text-base font-medium mt-[5px]">
        Cost for Two: {costForTwo}
      </h4>
      <p className="text-base font-medium mt-[5px]">
        Cuisines: {cuisines.join(", ")}
      </p>
    </div>
  );
}

export const BestSeller = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-black text-white border rounded mt-[9px] ml-[17px] p-1">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
