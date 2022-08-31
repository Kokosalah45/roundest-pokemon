import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:5000"
      : "https://pokemon-rest-api-new.herokuapp.com",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default apiClient;
