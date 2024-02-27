import React, { useState, useEffect } from 'react';
import useFetchRestaurants from '../Home/effect';

const useRestaurantData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState('');
  const [foodTypeFilter, setFoodTypeFilter] = useState('');
  const [starRatingFilter, setStarRatingFilter] = useState('');

  return { restaurants, filter, setFilter, setRestaurants, foodTypeFilter, setFoodTypeFilter, starRatingFilter, setStarRatingFilter };
};

const RestaurantList = () => {
  const { restaurants, filter, setFilter, setRestaurants, foodTypeFilter, setFoodTypeFilter, starRatingFilter, setStarRatingFilter } = useRestaurantData();
  useFetchRestaurants(setRestaurants);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase()) &&
    (restaurant.foodType ? restaurant.foodType.toLowerCase().includes(foodTypeFilter.toLowerCase()) : true) &&
    (starRatingFilter === '' || restaurant.starRating === parseInt(starRatingFilter))
  );

  return (
    <div className="restaurant-list p-4">
      <input
        className="filter-input mb-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter restaurants..."
      />
      <input
        className="filter-input mb-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        type="text"
        value={foodTypeFilter}
        onChange={(e) => setFoodTypeFilter(e.target.value)}
        placeholder="Filter by food type..."
      />
      <select
        className="filter-select mb-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        value={starRatingFilter}
        onChange={(e) => setStarRatingFilter(e.target.value)}
      >
        <option value="">Filter by star rating...</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <ul className="restaurant-ul">
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id} className="restaurant-li mb-2 p-2 bg-gray-100 rounded-md">{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <RestaurantList />
    </>
  );
};

export default Home;
