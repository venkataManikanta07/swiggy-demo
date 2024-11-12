import { RestaurentMenuItemCard } from "./RestaurentMenuItemCard";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resid } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const { restaurantsInformation, categories } = useRestaurentMenu(resid);
  const status = useOnlineStatus();

  const handleCategoryClick = (index) => {
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  if (restaurantsInformation === null) {
    return <h1>Loading Restaurents Menu.....</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category.card.card.title}
          category={category.card.card}
          showIndex={index === showIndex ? true : false}
          onClick={() => handleCategoryClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
