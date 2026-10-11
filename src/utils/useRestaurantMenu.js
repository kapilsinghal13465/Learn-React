import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  const [resMenuData, setResMenuData] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
    );
    const json = await data.json();
    console.log("json", json);
    setResData(json?.data?.cards[2]?.card?.card?.info || {});
    setResMenuData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [],
    );
  };
  return { resData, resMenuData };
};

export default useRestaurantMenu;
