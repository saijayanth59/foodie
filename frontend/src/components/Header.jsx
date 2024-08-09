import CartContext from "../context/CartContext";
import { useContext } from "react";
import imgLog from "../assets/logo.jpg";
import Button from "./UI/Button";
import ModalContext from "../context/ModalContext";
export default function Header() {
  const { items } = useContext(CartContext);
  const { show } = useContext(ModalContext);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={imgLog} alt="Food image" />
          <h1>FOOD APP</h1>
        </div>
        <nav>
          <Button onClick={() => show("cart")} isText>
            Cart ({items.length})
          </Button>
        </nav>
      </header>
    </>
  );
}
