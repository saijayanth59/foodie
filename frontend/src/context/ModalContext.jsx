import { createContext, useState } from "react";

const ModalContext = createContext({
  open: "",
  show: () => {},
  close: () => {},
});

export function ModalContextProvider({ children }) {
  const [open, setOpen] = useState("");

  function show(name) {
    setOpen(name);
  }

  function close() {
    setOpen("");
  }

  const modalContext = {
    open,
    show,
    close,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
