import { useContext, useState } from "react";
import Modal from "./components/UI/Modal";
import ModalContext from "./context/ModalContext";
import CartContext from "./context/CartContext";
import { postMeals } from "./utils/rest";
import toast from "react-hot-toast";

async function postData(payload) {
  try {
    const res = await postMeals(payload);
    toast.success(res.data.message);
  } catch (err) {
    console.error(err);
    toast.error(err);
  }
}

export default function Order() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    city: "",
  });
  const { items } = useContext(CartContext);
  const { open } = useContext(ModalContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      order: {
        customer: formData,
        items: items,
      },
    };
    postData(payload);
  }

  return (
    <Modal open={open === "order"}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>{" "}
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>{" "}
        <div>
          <label htmlFor="">City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button>Sumbit</button>
      </form>
    </Modal>
  );
}
