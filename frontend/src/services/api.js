import axios from "axios";
 
const API = axios.create({
baseURL: "http://localhost:8086", // your backend base url
});
 
export default API;