// import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";
const refreshKey = "refreshToken";
const tokens = getJwt();
http.setJwt(tokens.jwt, tokens.refreshToken);

export async function login(email:string, password:string) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt:string, refreshToken:string) {
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem(refreshKey, refreshToken)
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

export function getJwt() {
  return { jwt:localStorage.getItem(tokenKey), refreshToken:localStorage.getItem(refreshKey) };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  loginWithJwt,
  logout,
  // getCurrentUser,
  getJwt
};
