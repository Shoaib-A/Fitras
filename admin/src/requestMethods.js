import axios from "axios";

const BASE_URL = "https://fitras.onrender.com/api/";

let TOKEN = "";
const persistRoot = localStorage.getItem("persist:root");
if (persistRoot) {
  const persistData = JSON.parse(persistRoot);
  const user = JSON.parse(persistData.user);
  if (user && user.currentUser && user.currentUser.accessToken) {
    TOKEN = user.currentUser.accessToken;
  }
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
