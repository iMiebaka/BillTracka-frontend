import { ITUserLogin } from "../interface/auth";
import { COOKIE } from "../utils";
import api from "./request";

export function login(user: ITUserLogin): Promise<any> {
  return api.post("/api/auth/login", user).then((response) => {
    COOKIE.set("token", response.data.token, 2);
    COOKIE.set("refreshToken", response.data.refreshToken, 2);
    return response.data;
  });
}

export function signup(user: ITUserLogin): Promise<any> {
  return api.post("/api/auth/signup", user).then((response) => response.data);
}

export function verify(code: any, id: any): Promise<any> {
  return api
    .put("/api/auth/verify", {}, { params: { code, id } })
    .then((response) => response.data);
}
