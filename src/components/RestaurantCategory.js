import React, { useState } from "react";
import ItemCards from "./ItemCards";
import { motion } from "framer-motion";

const RestauratCategory = (props) => {
  const category = props.category?.card?.card;
  const items = category?.itemCards;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="my-4">
      <div
        className="flex justify-between p-4 cursor-pointer shadow-lg bg-gray-100 rounded-lg"
        onClick={handleClick}
      >
        <h1 className="font-bold">
          {category?.title + " (" + category?.itemCards.length + ")"}
        </h1>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="icon-[carbon--chevron-down]" />
        </motion.span>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isActive && (
          <ItemCards
            key={category?.card?.info?.id}
            item={category?.itemCards}
          />
        )}
      </motion.div>
    </div>
  );
};

export default RestauratCategory;
