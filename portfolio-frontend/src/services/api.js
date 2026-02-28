import axios from "axios";

const API = axios.create({
  // Added /api to the end of the base URL
  baseURL: import.meta.env.VITE_API_URL
});

export default API;