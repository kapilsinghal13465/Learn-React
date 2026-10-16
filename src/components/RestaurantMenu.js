import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimCard from "./ShimCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { resData, resMenuData } = useRestaurantMenu(params.resId);
  if (!resData) {
    return <ShimCard />;
  }

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="menu">
      <h1>{resData?.name}</h1>
      <p>
        {resData && resData?.cuisines?.join(",") + " - " + resData.costForTwo}
      </p>
      <h2>Menu</h2>
      <div>
        {resMenuData &&
          resMenuData?.map((menudata, index) => {
            return (
              <div key={menudata + index}>
                {menudata?.card?.card && (
                  <div>
                    <h3>{"---" + menudata.card.card?.title + "---"}</h3>
                    <MenuItem resMenuData={menudata} />
                    <button
                      className="button m-1 p-1 bg-blue-400 cursor-pointer"
                      onClick={() => handleAddItem(menudata)}
                    >
                      +Add
                    </button>
                    <br />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
