import axios from "axios";
console.log("check",import.meta.env.VITE_API_URL);

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default api;