import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BASE_BACK_END_URL,
  },
});

export default api;
