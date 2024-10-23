import React from "react";
import RestaurantCard from "./RestaurantCard";
import {listOfRestaurant as resList} from "../utils/resData"

export default function Body() {
    console.log(resList)
  return (
    <div className="body">
      <div className="search-container">
        <h2>Search</h2>
      </div>
      <div id="restaurents">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}
