const MenuItem = ({ menuItem }) => {
  console.log("menuItem", menuItem);
  const cardInfo = menuItem?.card?.info;
  return (
    <>
      <div key={cardInfo.id} className="p-5 text-left">
        <h4 className="py-3 text-2xl">*{cardInfo.name + " - " + cardInfo.price}</h4>
        <div>{ cardInfo.description + " " + cardInfo.category}</div>
      </div>
    </>
  );
};

export default MenuItem;
