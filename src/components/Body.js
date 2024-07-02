import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.9447899%26lng%3D77.7403283%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const resData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        [];

      setListOfRes(resData);
      setFilteredRes(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRes([]);
      setFilteredRes([]);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>You are Offline!! Check your internet connection</h1>;

  const handleSearch = () => {
    if (listOfRes.length > 0) {
      const filteredRes = listOfRes.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRes(filteredRes);
    }
  };

  const handleFilterTopRated = () => {
    if (listOfRes.length > 0) {
      const filteredList = listOfRes.filter(
        (res) => res.info.avgRating > 4.3
      );
      setFilteredRes(filteredList);
    }
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-4 py-6">
      <div className="filter flex flex-wrap justify-between items-center mb-6">
        <div className="search mb-4 md:mb-0 md:mr-4 flex items-center">
          <input
            type="text"
            className="search-box border border-solid border-black p-2 rounded-md w-full md:w-auto"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-text bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 transition duration-300 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="filter-button">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={handleFilterTopRated}
          >
            Top Rated Restaurants ⭐
          </button>
        </div>
      </div>
      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredRes.length > 0 ? (
          filteredRes.map((res) => (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
              className="transform transition duration-500 hover:scale-105 hover:shadow-lg w-full flex justify-center"
            >
              <RestaurantCard resData={res} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
