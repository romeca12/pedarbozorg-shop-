import axios from "axios";

const api = axios.create({
  baseURL: "http://5.144.132.115:8003/",
});

export default api;
