import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY
  }
});

export default API;