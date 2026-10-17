import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-10 p-10">
      <div className="text-2xl font-bold">Cart</div>
      {cartItems.map((menuItem, index) => {
        return <MenuItem key={index} menuItem={menuItem} />;
      })}
    </div>
  );
};

export default Cart;
