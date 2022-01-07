import { API } from "../../../backend.js";
import axios from "axios";

// GET RATING
export const getRate = (rateId) => {
  return fetch(`${API}/rating/${rateId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// GET RAGINGS
export const getAllRates = () => {
  return fetch(`{API}/ratings`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// CREATE RATING
export const createRating = (ratings) => {
  return axios
    .post(`${API}/rating/create`, ratings)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
