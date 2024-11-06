import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";

export default function Body() {
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");
  const searchRestaurents = () => {
    const filteredRes = filteredRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurents(filteredRes);
  };

  useEffect(() => {
    console.log(filteredRestaurants.length);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const jsonData = await response.json();
      const restaurants =
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setListOfRestaurents(restaurants);
      setFilteredRestaurents(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      {console.log(filteredRestaurants.length)}
      <div className="search-container flex m-2 p-1">
        <input
          className="border w-56 p-1 h-10 rounded-md border-blue-950 mr-2"
          type="text"
          placeholder="Search Restaurent"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setFilteredRestaurents(listOfRestaurants);
          }}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 w-20 text-center text-base mr-2 rounded-lg"
          onClick={() => {
            searchRestaurents();
          }}
        >
          Search
        </button>
        <button
          className=" text-white bg-red-700 hover:bg-red-800 w-[9rem] text-center text-base mr-2 rounded-lg"
          onClick={() => {
            const topRests = filteredRestaurants.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setFilteredRestaurents(topRests);
          }}
        >
          Top Restuarents
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurents/" + restaurant.info.id}
            >
              <RestaurantCard
                name={restaurant.info.name}
                image={restaurant.info.cloudinaryImageId}
                locality={restaurant.info.locality}
                avgRating={restaurant.info.avgRating}
                cuisines={restaurant.info.cuisines}
                deliveryTime={restaurant.info.sla.deliveryTime}
                costForTwo={restaurant.info.costForTwo}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
