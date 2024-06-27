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
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9447899&lng=77.7403283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRes(resData);
    setFilteredRes(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>You are Offline!! Check your internet connection</h1>;

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
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-button">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants ⭐
          </button>
        </div>
      </div>
      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredRes.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            className="transform transition duration-500 hover:scale-105 hover:shadow-lg w-full flex justify-center"
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
