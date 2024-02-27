import { useEffect } from 'react';

const useFetchRestaurants = (setRestaurants) => {
  useEffect(() => {

    const fetchData = async () => {

      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = [
        { id: 1, name: 'Restaurant 1' },
        { id: 2, name: 'Restaurant 2' },
        { id: 3, name: 'Restaurant 3' },
      ];
      setRestaurants(data);
    };

    fetchData();
  }, [setRestaurants]);
};

export default useFetchRestaurants;