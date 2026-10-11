import ResCard from "./ResCard";
import cardsData from "../utils/data";
import { useEffect, useState } from "react";
import ShimCard from "./ShimCard";
import { Link } from "react-router";

const ResContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [resCards, setResCards] = useState([]);
  const [filterResCards, setFilterResCards] = useState([]);

  useEffect(() => {
    fetchResList();
  }, []);

  const fetchResList = () => {
    fetch("https://namastedev.com/api/v1/listRestaurants").then((data) => {
      data.json().then((resList) => {
        console.log("resList", resList);
        setResCards(
          resList?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [],
        );
        setFilterResCards(
          resList?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [],
        );
      });
    });
  };

  return resCards.length === 0 ? (
    <ShimCard />
  ) : (
    <>
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = resCards.filter((card) =>
                card?.info?.name
                  ?.toLocaleLowerCase()
                  .includes(searchText?.toLocaleLowerCase()),
              );
              setFilterResCards(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resCards.filter(
              (card) => card?.info?.avgRatingString > 4.2,
            );
            setResCards(filteredList);
          }}
        >
          Top Rating Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterResCards.map((card) => {
          const {
            name,
            cuisines,
            avgRatingString,
            sla,
            id,
            cloudinaryImageId,
          } = card?.info || {};
          return (
            <Link key={id} to={"/restaurants/" + id}>
            <ResCard
              
              id={id}
              resName={name}
              resCousine={cuisines?.join(", ")}
              resRating={avgRatingString}
              resCookTime={sla?.slaString}
              cloudinaryImageId={cloudinaryImageId}
            />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ResContainer;
