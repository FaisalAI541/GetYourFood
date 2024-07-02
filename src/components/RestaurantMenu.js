import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { MENU_API } from "../utils/constants";
import { motion } from "framer-motion";
import ItemCards from "./ItemCards";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setMenu(json.data);
  };

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return !menu ? (
    <Shimmer />
  ) : (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-4">
      <div className="mb-6">
        <h1 className="font-bold text-2xl">
          {menu?.cards[2]?.card?.card?.info?.name}
        </h1>
        <p className="text-gray-600">
          {menu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
        </p>
        <p className="text-gray-600">
          {menu?.cards[2]?.card?.card?.info?.areaName}
        </p>
      </div>
      <div className="border-b-2 pb-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="icon-[carbon--star-filled] text-green-500 mr-1" />
              <h2 className="font-bold text-lg">
                {menu.cards[2]?.card?.card?.info?.avgRatingString}
              </h2>
            </div>
            <p className="text-gray-600">
              {menu?.cards[2]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600">
              {menu?.cards[2]?.card?.card?.info?.sla?.lastMileTravel} KMs | ₹
              {menu.cards[0]?.card?.card?.info?.feeDetails?.totalFee / 100 ||
                40}{" "}
              Delivery fee will apply
            </p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center">
          <span className="icon-[carbon--time] text-gray-600 mr-1"></span>
          <p className="text-xs text-gray-600">
            {menu?.cards[2]?.card?.card?.info?.sla?.slaString}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <span className="icon-[carbon--currency] text-gray-600 mr-1"></span>
          <p className="text-xs text-gray-600">
            {menu?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        {categories &&
          categories.map((category) => (
            <motion.div
              key={category?.card?.card?.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <RestaurantCategory category={category} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
