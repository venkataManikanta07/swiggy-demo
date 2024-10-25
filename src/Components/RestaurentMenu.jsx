import { useEffect, useState } from "react";
import { RestaurentMenuItemCard } from "./RestaurentMenuItemCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
  const [restaurantsInformation, setRestaurentInformation] = useState(null);
  const [restaurentName, setRestaurentName] = useState("");
  const { resid } = useParams();

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  const fetchRestaurentMenu = async () => {
    const data = await fetch(
      MENU_API + resid + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurentInformation(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setRestaurentName(jsonData.data.cards[0].card.card.text);
  };
  if (restaurantsInformation === null) {
    return <h2>Fetching Data...</h2>;
  }
  return (
    <div className="specific-restro-container">
      <h2>{restaurentName}</h2>
      {restaurantsInformation && restaurantsInformation.length > 0 ? (
        restaurantsInformation.map((menuItem) => (
          <RestaurentMenuItemCard
            key={menuItem.card.info.id}
            restaurentName={restaurentName}
            itemName={menuItem.card.info.name}
            price={menuItem.card.info.defaultPrice}
            description={menuItem.card.info.description}
          />
        ))
      ) : (
        <h2>Unable to Load Menu Items...</h2>
      )}
    </div>
  );
};

export default RestaurentMenu;
