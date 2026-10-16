const MenuItem = ({ resMenuData }) => {
  console.log("resMenuData", resMenuData);

  return (
    <>
      {resMenuData && resMenuData?.card.card?.itemCards.map((menuItem) => {
        const menu = menuItem.card.info;
        return (
          <div key={menu.id}>
            <h4>*{menu.name + " - " + menu.price}</h4>
            <div>{"\b" + menu.description + " " + menu.category}</div>
          </div>
        );
      })}
    </>
  );
};

export default MenuItem;
