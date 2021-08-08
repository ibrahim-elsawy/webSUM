import http, { Result } from "./httpService";
import { apiUrl } from "../config.json";






export function fileProcess(formData:FormData) {
  return http.post<Result>(apiUrl + '/sum/file', formData, {
    headers: {
      'content-type': /*'multipart/form-data'*/'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': true,
      }
    });
  }

export function stringProcess(textForm?: FormData) {
  return http.post<Result>(apiUrl + '/sum/text', textForm, {
    headers: {
      
      'Acces-Control-Allow-Origin':true,
    }
  });
  }


