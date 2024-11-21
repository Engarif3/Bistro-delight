import axios from "axios";

const api = axios.create({
  // Set your base URL here
  baseURL: "https://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
