import ResCard from "./ResCard";
import cardsData from "../utils/data";
import { useState } from "react";

const ResContainer = () => {
    const [resCards, setResCards] = useState(cardsData?.data?.resList || [])
  
  return (
    <>
    <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = resCards.filter((card) => card?.info?.avgRatingString > 4.2);
            setResCards(filteredList);
        }}>Top Rating Restaurant</button>
    </div>
   
  <div className="res-container">
    { resCards.map((card) => {
      const { name, cuisines, avgRatingString, sla, id, cloudinaryImageId } = card?.info || {};
      return (
        <ResCard
        key={id}
          id={id}
          resName={name}
          resCousine={cuisines?.join(", ")}
          resRating={avgRatingString}
          resCookTime={sla?.slaString}
        cloudinaryImageId={cloudinaryImageId}
        />
      );
    })}
  </div>
   </>)
};

export default ResContainer;