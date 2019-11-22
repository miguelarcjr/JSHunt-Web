import axios from "axios";

const api = axios.create({ baseURL: "https://jshuntapi.herokuapp.com/api" });

export default api;
