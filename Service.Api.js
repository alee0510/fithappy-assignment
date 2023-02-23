import axios from "axios";

const API = axios.create({
    baseURL : "https://newsapi.org/v2/",
    timeout : 5000
})

const API_KEY = "2fd11846d6f54c05956d09209c1b5fbe"
export const URI = {
    path : (category) => `top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
}

// @default export
export default API