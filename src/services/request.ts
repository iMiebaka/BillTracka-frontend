import axios, { AxiosInstance } from "axios";
import { baseURL } from "../utils";

// axios.defaults.headers.common["X-CLIENT-ID"] = device_id;

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// const authApi: AxiosInstance = axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     // "X-CLIENT-ID": CLIENT_ID,
//   },
// });

// async function refreshAccessToken() {
//   const refreshToken = COOKIE.get("access_token");

//   // Send a request to the server to refresh the access token using the refresh token
//   const response = await api.post("/token/", {
//     grant_type: 'refresh_token',
//     refresh_token: refreshToken,
//     client_id,
//     // client_secret
//   });

//   // Store the new access token in the local storage
//   COOKIE.set("access_token", response.data.access_token, 1);
//   COOKIE.set("refresh_token", response.data.refresh_token, 5);
//   // Return the new access token
//   return response.data.access_token;
// }

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // const originalRequest = error.config;

    // If the response status code is 401 (Unauthorized) and the request hasn't been retried yet
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    // Refresh the access token
    // const accessToken = await refreshAccessToken();

    // Update the authorization header with the new access token
    // error.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // Resend the original request with the new access token
    // return api(originalRequest);
    // } catch (error) {
    // If the refresh token is invalid or the refresh token route returns an error, redirect the user to the login page
    // ...
    // }
    // }

    // Return the error if it wasn't a 401 error or the maximum number of retries has been reached
    return Promise.reject(error);
  }
);

export default api;