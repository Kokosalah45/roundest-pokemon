import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:5000"
      : "https://poke-miniapi-production.up.railway.app/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default apiClient;
