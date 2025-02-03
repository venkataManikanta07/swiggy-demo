import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { BestSeller } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { PROXY, PROXY_API, SWIGGY_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

export default function Body() {
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurents] = useState([]);
  const RestaurantCardPromoted = BestSeller(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");
  const searchRestaurents = () => {
    const filteredRes = filteredRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurents(filteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const encodedUrl = encodeURIComponent(SWIGGY_API);
      const PROXY_API_DATA = PROXY_API + encodedUrl; 
      const response = await fetch(PROXY_API_DATA);
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
      <div className="search-container flex m-2 p-1">
        <input
          className="border w-56 p-1 h-10 rounded-md border-blue-950 mr-2"
          data-testid="searchInput"
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
        <label className="m-2">Set User</label>
        <input
          className="border w-56 p-1 h-10 rounded-md border-blue-950 mr-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
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
              {restaurant.info.avgRating >= 4.4 ? (
                <RestaurantCardPromoted
                  data-testid="restaurant-card"
                  resData={restaurant.info}
                />
              ) : (
                <RestaurantCard
                  data-testid="restaurant-card"
                  resData={restaurant.info}
                />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
