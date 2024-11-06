import { RestaurentMenuItemCard } from "./RestaurentMenuItemCard";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurentMenu = () => {
  const { resid } = useParams();
  const restaurantsInformation = useRestaurentMenu(resid);
  const status = useOnlineStatus(); 
   

  if (restaurantsInformation === null) {
    return <h1>Loading Restaurents Menu.....</h1>;
  }

  return (
    <div className="specific-restro-container flex flex-col items-center justify-center">
      {restaurantsInformation && restaurantsInformation.length > 0 ? (
        restaurantsInformation.map((menuItem) => (
          <RestaurentMenuItemCard
            key={menuItem.card.info.id}
            itemName={menuItem.card.info.name}
            price={
              menuItem.card.info.defaultPrice ??
              menuItem.card.info.finalPrice ??
              menuItem.card.info.price
            }
            description={menuItem.card.info.description}
          />
        ))
      ) : (
        <h2>Unable to load Menu items...</h2>
      )}
    </div>
  );
};

export default RestaurentMenu;
