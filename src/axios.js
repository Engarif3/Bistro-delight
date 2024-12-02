import axios from "axios";

const api = axios.create({
  // Set your base URL here
  //baseURL: "https://localhost:8000/api",
  baseURL: "http://localhost:8000/api",
  // baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
