import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://pokemon-rest-api.herokuapp.com",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default apiClient;
