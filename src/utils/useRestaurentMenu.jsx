import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resid) => {
  const [restaurantsInformation, setRestaurantsInformation] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resid);
      const jsonData = await data.json();
      setCategories(
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (c) => {
            return (
              c.card.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
          }
        )
      );
      setRestaurantsInformation(
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards
      );
    } catch (error) {
      console.log("ERROR LOADIN ELEMENTS..." + error);
    }
  };
  return { restaurantsInformation, categories };
};

export default useRestaurentMenu;
