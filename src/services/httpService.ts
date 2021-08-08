import axios from "axios";
import { logger } from "./logService";

axios.interceptors.response.use(undefined, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
  }

  return Promise.reject(error);
});

function setJwt(jwt:string|null, refreshToken: string|null) {
  axios.defaults.headers.common["token"] = jwt;
  axios.defaults.headers.common["refreshToken"] = refreshToken;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
