import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { motion } from "framer-motion";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = items.reduce((total, item) => {
    return total + (item.card.info.price || item.card.info.defaultPrice) / 100;
  }, 0);

  const placeholderImage = "https://via.placeholder.com/120x95?text=No+Image";
  return (
    <motion.div
      className="w-full max-w-screen-lg mx-auto my-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {items.length === 0 ? (
          <motion.p
            className="text-gray-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <motion.li
                  key={item.card.info.id}
                  className="flex justify-between items-center py-4 border-b"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                      alt={item.card.info.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h2 className="font-semibold text-lg">
                        {item.card.info.name}
                      </h2>
                      <p className="text-gray-600">
                        ₹{" "}
                        {item.card.info.price
                          ? item.card.info.price / 100
                          : item.card.info.defaultPrice / 100}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-between items-center my-4">
              <h2 className="text-xl font-bold">
                Total Amount: ₹ {totalAmount.toFixed(2)}
              </h2>
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Clear Cart
              </button>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded font-bold transition-transform duration-300 hover:scale-105">
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
