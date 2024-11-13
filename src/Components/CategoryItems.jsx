import { useDispatch } from "react-redux";
import { CDN_IMG_id } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between mb-1 p-3 border-b-2 border-gray-400"
        >
          <div className="w-10/12">
            <h3 className="text-base font-bold mt-1">{item.card.info.name}</h3>
            <h6 className="font-semibold">
              ₹:{" "}
              {item.card.info.price / 100
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h6>
            <p className="text-wrap">{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <div className="absolute">
              <button
                className="text-green-700 font-bold font-sans bg-white border rounded-md mx-1 p-1 mt-[104px] ml-[36px] "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_IMG_id + item.card.info.imageId}
              className="w-32 h-32 object-cover border"
              alt="Img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
