import Modal from "./components/UI/Modal";
import { useContext } from "react";
import CartContext from "./context/CartContext";
import Button from "./components/UI/Button";
import ModalContext from "./context/ModalContext";
import CartItem from "./components/CartItem";

export default function Cart() {
  const { items } = useContext(CartContext);
  const { open, close, show } = useContext(ModalContext);
  const totalPrice = items.reduce(
    (prev, item) => prev + item.quantity * item.price,
    0
  );

  return (
    <Modal className="cart" open={open === "cart"}>
      <h1>Your Cart</h1>
      <ul>
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="cart-total">Total Price :{totalPrice}</p>
      <p className="modal-actions">
        <Button onClick={() => close()} isText>
          Close
        </Button>
        <Button onClick={() => show("order")}>Go to checkout</Button>
      </p>
    </Modal>
  );
}
