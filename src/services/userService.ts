import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

interface User{
  username: string;
  email: string;
  password: string;
};


export function register(user:User) {
  return http.post(apiEndpoint, {
    username: user.username,
    email: user.username,
    password: user.password,
  });
}
