
import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Login user
export const loginUser = (credentials) => API.post("/auth/login", credentials);

// Get user profile (protected route)
export const getProfile = () => API.get("/auth/profile");
