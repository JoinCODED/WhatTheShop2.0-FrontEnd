import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.100.11:80/api/"
});

// export const instance = axios.create({
//   baseURL: "http://192.168.100.11:80/api/"
// });
