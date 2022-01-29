import { API } from "../../backend";
import axios from "axios";

// post contact
export const createContact = (contactUs) => {
  return axios
    .post(`${API}/contact/create`, contactUs)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
