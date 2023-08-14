import axios from "axios"

/** Axios api call with a given URL */
export async function getOnChangePage(url: string | undefined) {
    const API = axios.create({ baseURL: url });
    return await API.get("");
}