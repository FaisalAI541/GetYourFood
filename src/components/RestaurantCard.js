import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-full sm:w-64 md:w-72 lg:w-80 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img
        className="res-logo w-full h-48 object-cover rounded-lg mb-2"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-bold mb-1 text-center">{name}</h3>
      <h4 className="text-sm mb-1 text-center">{cuisines.join(", ")}</h4>
      <div className="flex items-center mb-1">
        <svg
          className="h-4 w-4 text-yellow-400 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9.5 2.094c.18-.495.82-.495 1 0l1.036 2.852a.5.5 0 0 0 .464.34l3.152.208c.546.036.77.752.36 1.12l-2.55 2.023a.5.5 0 0 0-.162.54l.958 3.164c.33 1.09-.905 1.975-1.871 1.35l-2.605-1.693a.5.5 0 0 0-.553 0l-2.605 1.693c-.966.625-2.202-.26-1.872-1.35l.958-3.164a.5.5 0 0 0-.162-.54L3.95 6.604c-.41-.368-.186-1.084.36-1.12l3.152-.208a.5.5 0 0 0 .464-.34L8.5 2.094zM10 14l-3 2.5 1-3.5-3-2.5h3l1-3.5 1 3.5h3l-3 2.5 1 3.5z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="text-sm">{avgRating} stars</h4>
      </div>
      <h4 className="text-sm mb-1 text-center">Cost for Two: {costForTwo}</h4>
      <h4 className="text-sm text-center">{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
