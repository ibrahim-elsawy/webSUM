// import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";
import { LoginForm, RegisterForm, SignUpResult } from "./Forms/auth";
import { alertToast } from "./Validation/sumbitCheck";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";
const refreshKey = "refreshToken";


const tokens = getJwt();
http.setJwt(tokens.jwt, tokens.refreshToken);

export async function Register(registerForm:RegisterForm) {
  try {
      return await http.post<SignUpResult>(apiEndpoint + "/register", {
      "username": registerForm.username,
      "email": registerForm.email,
      "password": registerForm.password
    }, {
      headers: {
      
        'Acces-Control-Allow-Origin': true
      },
      maxBodyLength: 4000,
      maxContentLength: 4000,
      }).then(({ data }) => {
        loginWithJwt(data?.token as string, data?.refreshToken as string)
        return data.success;
      }).catch(({ response }) => {
        let errMsg = '';
        response.data.errors.$values?.forEach((e:any) => {
          errMsg += e;
        });
        alertToast(errMsg);
        return response.data.success;
      })
  } catch(e) { alertToast(e)};
  // localStorage.setItem(tokenKey, jwt);
}


export async function login(loginForm:LoginForm) {
  try {
      return await http.post<SignUpResult>(apiEndpoint + "/login", {
      "email": loginForm.email,
      "password": loginForm.password 
    }, {
      headers: {
      
        'Acces-Control-Allow-Origin': true
      },
      // timeout: 1000,
      maxBodyLength: 4000,
      maxContentLength: 4000,
      }).then(({ data }) => {
        console.log(data);
        loginWithJwt(data?.token as string, data?.refreshToken as string)
        return data.success;
      }).catch(({ response }) => {
        let errMsg = '';
        response.data.errors.$values?.forEach((e:any) => {
          errMsg += e;
        });
        alertToast(errMsg);
        return response.data.success;
      })
    
  } catch(e) { alertToast(e)};
}

export function loginWithJwt(jwt:string, refreshToken:string) {
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem(refreshKey, refreshToken)
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(refreshKey);
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
  Register,
  loginWithJwt,
  logout,
  // getCurrentUser,
  getJwt
};
