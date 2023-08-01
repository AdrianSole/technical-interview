import axios from "axios";

export const RM_API = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})