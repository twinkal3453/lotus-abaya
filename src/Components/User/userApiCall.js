import { API } from "../../backend";
import axios from "axios";

export const getUser = (id, token) => {
  return axios
    .get(`${API}/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};
