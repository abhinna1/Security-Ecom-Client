import axios from "axios";
import client_routes from "../../routes/ClientRoutes.js";

const api = axios.create({
  // API configuration options, such as base URL, headers, etc.
});

// Add a response interceptor
api.interceptors.response.use(
  response => {
    // Handle successful responses
    return response;
  },
  error => {
    // Handle error responses
    if (error.response.status === 403) {
      localStorage.removeItem("session");
      window.location.href = client_routes.UserRoutes.login_route;
    }

    return Promise.reject(error);
  }
);

export default api;