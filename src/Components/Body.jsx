import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
import useRestaurentsFetch from "../utils/useRestaurentsFetch";

export default function Body() {
  // const [listOfRestaurants, setListOfRestaurents] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchRestaurents = () => {
    const filteredRes = filteredRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurents(filteredRes);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(SWIGGY_API);
  //     const jsonData = await response.json();
  //     const restaurants =
  //       jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

  //     setListOfRestaurents(restaurants);
  //     setFilteredRestaurents(restaurants);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const { listOfRestaurants, filteredRestaurants } = useRestaurentsFetch();

  const status = useOnlineStatus();
  if (status === false)
    return <h2>System Offline, please check your connection</h2>;

  return (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Restaurent"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredRestaurents(listOfRestaurants);
            }}
          />
          <button
            onClick={() => {
              searchRestaurents();
            }}
          >
            Search
          </button>
          <button
            className="topRestuarentBtn"
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
        <div id="restaurents">
          {filteredRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                id="custom-link"
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
    </>
  );
}
