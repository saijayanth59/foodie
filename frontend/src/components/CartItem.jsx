import { useContext } from "react";
import CartContext from "../context/CartContext";
export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);
  return (
    <>
      <li className="cart-item">
        <p>
          {item.name} - {item.quantity * item.price}
        </p>
        <p className="cart-item-actions">
          <button onClick={() => removeItem(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addItem(item)}>+</button>
        </p>
      </li>
    </>
  );
}
