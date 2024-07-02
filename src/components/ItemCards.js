import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCards = (props) => {
  const items = props.items; // Assuming props.items is an array of items to display
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const placeholderImage = "https://via.placeholder.com/120x95?text=No+Image";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("Item added:", item); // Log the item being added
    dispatch(addItem(item)); // Dispatch addItem action with the item
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="relative border-b-2 py-8 flex flex-col sm:flex-row items-center justify-between"
        >
          <div className="p-2 m-1 sm:w-2/3">
            <h2 className="font-semibold text-sm text-gray-600">
              {item?.card?.info?.name}
            </h2>
            <h3 className="font-medium text-sm text-gray-600">
              ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h3>
            <h4 className="my-1.5 text-sm text-gray-500">
              {item?.card?.info?.description}
            </h4>
          </div>
          <div className="w-full sm:w-1/4 p-1 relative flex justify-center">
            <div className="relative w-full sm:w-[120px] h-[95px]">
              <img
                className="w-full h-full rounded-lg"
                src={
                  item?.card?.info?.imageId
                    ? CDN_URL + item?.card?.info?.imageId
                    : placeholderImage
                }
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = placeholderImage;
                }}
                alt={item?.card?.info?.name}
              />
              <div
                className="absolute inset-y-0 flex items-center justify-center"
                style={{ right: "-50%" }}
              >
                <button
                  className="bg-white shadow-lg rounded-lg px-4 py-2 text-green-600 font-bold transition-transform duration-300 hover:scale-105"
                  onClick={() => handleAddItem(item)}
                  aria-label={`Add ${item?.card?.info?.name} to cart`}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
