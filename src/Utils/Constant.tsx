export const LOCALSTORAGE_KEY = {
  userData: "USERDATA",
};

export const BASE_URL = "https://snake-game-api-c6ii.onrender.com";
const userData = localStorage.getItem(LOCALSTORAGE_KEY?.userData);
const token = userData ? JSON.parse(userData) : null;
export const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const AuthHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
