import axios from "axios"

export async function getOnChangePage(url: string | undefined) {
    const API = axios.create({ baseURL: url });
    return await API.get("");
}