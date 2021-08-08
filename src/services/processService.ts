import http from "./httpService";
import { apiUrl } from "../config.json";






export function fileProcess(formData:FormData) {
  return http.post(apiUrl + '/file', formData, {
    headers: {
        'content-type': 'multipart/form-data'
      }
    });
  }

export function stringProcess(text:string) {
  return http.post(apiUrl + '/text', text);
  }


