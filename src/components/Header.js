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

  // Function to toggle login/logout button
  const toggleLogin = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };

  return (
    <header className="bg-gray-800 py-4 px-8 md:flex md:justify-between md:items-center">
      {/* Logo and Branding */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Link to="/" className="flex items-center text-white">
          <img className="w-12 mr-2" src={LOGO_URL} alt="Logo" />
          <h3 className="text-xl font-bold">GetYourFood</h3>
        </Link>
        <div className="md:hidden">
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
      </div>
      
      {/* Navigation Links */}
      <nav className={`md:flex md:items-center ${menuOpen ? "block" : "hidden"} md:block w-full md:w-auto text-center md:text-left`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center md:ml-auto">
          <li className="text-white">
            <span className={`mr-2 ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
              {onlineStatus ? "✅" : "🔴"}
            </span>
            Online Status
          </li>
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About Us" />
          <NavLink to="/contact" text="Contact" />
          <li>
            <NavLink to="/cart" text={`Cart 🛒 (${cartItems.length})`} />
          </li>
          <li>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleLogin}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 text-white">
          <div className="flex flex-col space-y-4 py-4">
            <div className="flex items-center justify-center">
              <span className={`mr-2 ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                {onlineStatus ? "✅" : "🔴"}
              </span>
              Online Status
            </div>
            <NavLinkMobile to="/" text="Home" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/about" text="About Us" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/contact" text="Contact" onClick={() => setMenuOpen(false)} />
            <div className="mb-4">
              <NavLinkMobile to="/cart" text={`Cart 🛒 (${cartItems.length})`} onClick={() => setMenuOpen(false)} />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleLogin}
            >
              {btnName}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// NavLink component for desktop view
const NavLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-white hover:text-gray-300">
      {text}
    </Link>
  </li>
);

// NavLink component for mobile view
const NavLinkMobile = ({ to, text, onClick }) => (
  <Link to={to} className="text-white hover:text-gray-300 block py-2 text-center" onClick={onClick}>
    {text}
  </Link>
);

export default Header;
