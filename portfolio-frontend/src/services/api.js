import axios from "axios";

const API = axios.create({
  // Added /api to the end of the base URL
  baseURL: "http://localhost:8080/api" 
});

export default API;