import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus(); // Assuming useOnlineStatus is defined somewhere

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full bg-gray-800 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-12 mr-2" src={LOGO_URL} alt="Logo" />
        <div className="text-white">
          <h3 className="text-xl font-bold">GetYourFood</h3>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex text-white space-x-6">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300">
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
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="absolute top-16 left-0 right-0 bg-gray-800 text-white flex flex-col items-center md:hidden">
          <ul className="flex flex-col space-y-4 py-4">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>Cart</li>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
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
