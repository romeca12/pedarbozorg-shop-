import axios from "axios";

const api = axios.create({
  baseURL: "http://5.144.132.115:8003/",
  headers: {
    Authorization: 'Bearer your_token_here',
  }
});

export default api;
