import axios from "axios";

const URL = "http://localhost:3000";

export async function getMeals() {
  const res = await axios.get(`${URL}/meals`);
  if (res.status !== 200) {
    return new Error("Error to fetch meals data");
  }
  return res;
}

export async function postMeals(payload) {
  const res = await axios.post(`${URL}/orders`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status != 201) {
    return new Error("Unable to send post data");
  }
  return res;
}
