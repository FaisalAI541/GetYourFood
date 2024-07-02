import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close
  const onlineStatus = useOnlineStatus(); // Assuming useOnlineStatus is defined somewhere
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Function to toggle menu open/close
  };

  const handleMenuClick = () => {
    if (menuOpen) {
      setMenuOpen(false); // Close the menu when any menu item is clicked
    }
  };

  return (
    <div className="w-full bg-gray-800 py-4 px-8 flex justify-between items-center relative">
      <div className="flex items-center">
        <img className="w-12 mr-2" src={LOGO_URL} alt="Logo" />
        <div className="text-white">
          <h3 className="text-xl font-bold">GetYourFood</h3>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center">
          <span className="mr-2">Online Status: {onlineStatus ? "✅" : "🔴"}</span>
        </div>
        <ul className="flex text-white space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300" onClick={handleMenuClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300" onClick={handleMenuClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300" onClick={handleMenuClick}>
              Cart🛒({cartItems.length})
            </Link>
          </li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 text-white flex flex-col items-center md:hidden z-20">
          <ul className="flex flex-col space-y-4 py-4">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/" className="hover:text-gray-300 block py-2 px-4" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 block py-2 px-4" onClick={handleMenuClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 block py-2 px-4" onClick={handleMenuClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300 block py-2 px-4" onClick={handleMenuClick}>
                Cart🛒({cartItems.length})
              </Link>
            </li>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
