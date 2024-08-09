import Header from "./components/Header";
import Meals from "./components/Meals";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from "./context/CartContext";
import { ModalContextProvider } from "./context/ModalContext";
import Cart from "./Cart";
import Order from "./Order";

function App() {
  return (
    <>
      <Toaster />
      <ModalContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Order />
        </CartContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
