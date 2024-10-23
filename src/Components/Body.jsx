import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { listOfRestaurant } from "../utils/resData";

export default function Body() {
  const [filterdRestuarents, setFilteredRestuarents] =
    useState(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9804517&lng=77.746281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
  };

  const topRestuarentsFilter = () => {
    const newRestuarents = filterdRestuarents.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestuarents(newRestuarents);
  };

  return (
    <div className="body">
      <div className="search-container">
        <button
          className="topRestuarentBtn"
          onClick={() => {
            topRestuarentsFilter();
          }}
        >
          Top Restuarents
        </button>
      </div>
      <div id="restaurents">
        {filterdRestuarents.map((res) => (
          <RestaurantCard
            key={res.data.id}
            name={res.data.name}
            area={res.data.areaName}
            rating={res.data.avgRating}
            cost={res.data.costForTwo}
            cusines={res.data.cuisines}
            price={res.data.costForTwo}
          />
        ))}
      </div>
    </div>
  );
}
