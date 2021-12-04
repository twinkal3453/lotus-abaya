import { API } from "./backend";

import axios from "axios";

const instance = axios.create({
  baseURL: API,
});

export default instance;
