import { useEffect, useState } from "react";
import { getMeals } from "../utils/rest";
import toast from "react-hot-toast";
import Item from "./Item";

export default function Meals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await getMeals();
        setItems(res.data);
        toast.success("GET /meals success");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <ul id="meals">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </>
  );
}
