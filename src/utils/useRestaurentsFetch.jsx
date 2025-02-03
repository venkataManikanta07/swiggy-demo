import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurentsFetch = () => {
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const jsonData = await response.json();
      const restaurants =
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setListOfRestaurents(restaurants);
      // setFilteredRestaurents(restaurants)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { listOfRestaurants };
};

export default useRestaurentsFetch;
