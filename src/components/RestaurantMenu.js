import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimCard from "./ShimCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  
  const {resData, resMenuData} = useRestaurantMenu(params.resId)
  if (!resData) {
    return <ShimCard />;
  }

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
              <div key={menudata + index} >
                {menudata?.card?.card && (
                  <div>
                    <h3>{'---' + menudata.card.card?.title + '---'}</h3>
                    {menudata.card.card?.itemCards.map((menuItem) => {
                      const menu = menuItem.card.info;
                      return (
                        <div key={menu.id}>
                          <h4>*{menu.name + ' - ' + menu.price}</h4>
                          <div>{'\b' + menu.description + " " + menu.category}</div>
                        </div>
                      );
                    })}
                    <br/>
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
