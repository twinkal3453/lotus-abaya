import { API } from "../../../backend";

// get All carousels
export const getAllCarousels = () => {
  return fetch(`${API}/carousels`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
