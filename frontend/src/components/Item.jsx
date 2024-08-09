import { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from "./UI/Button";

export default function Item({ item }) {
  const { addItem } = useContext(CartContext);

  function handleClick() {
    addItem(item);
  }

  return (
    <>
      <li className="meal-item" key={item.id}>
        <article>
          <img src={`http://localhost:3000/${item.image}`} alt="food image" />
          <div>
            <h3>{item.name}</h3>
            <p className="meal-item-price">${item.price}</p>
            <p className="meal-item-description">{item.description}</p>
          </div>
          <p className="meal-item-actions">
            <Button onClick={handleClick}>Add to cart</Button>
          </p>
        </article>
      </li>
    </>
  );
}
