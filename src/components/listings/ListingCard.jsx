


import { useNavigate } from "react-router-dom";

const ListingCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${data?.restaurantId}`)}
      className="cursor-pointer group border p-4"
    >

      {/* Image */}
      {data?.imageUrl ? (
        <img
          src={data?.imageUrl}
          alt={data?.name}
          className="w-full h-32 object-cover"
        />
      ) : (
        <div>No Image Available</div>
      )}

      {/* Name */}
      <div>
        <h3>Restaurant Name: {data?.name}</h3>
      </div>

      {/* Location */}
      <div>
        <p>
          Location: {data?.location?.city}, {data?.location?.country_id?.countryName}
        </p>
      </div>

      {/* Avg. Cost for Two */}
      <div>
        <p>
          Avg. Cost for Two: {data?.currency} {data?.average_cost_for_two}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
