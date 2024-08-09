import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  const items = [...state.items];
  const idx = items.findIndex((item) => item.id === action.item.id);
  // to add new item to card
  if (action.type == "ADD") {
    if (idx == -1) {
      items.push({
        ...action.item,
        quantity: 1,
      });
    } else {
      items[idx].quantity += 1;
    }
    return { ...state, items };
  }
  // to remove item with corresponding id
  if (action.type == "REMOVE") {
    if (items[idx].quantity == 1) {
      items.splice(idx, 1);
    } else {
      items[idx].quantity -= 1;
    }
    return { ...state, items };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item });
  }

  function removeItem(item) {
    dispatchCartAction({ type: "REMOVE", item });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
