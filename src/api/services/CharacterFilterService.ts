import { RM_API } from "../client/client";

/** Get characters filtered by a given name */
export const getCharactersFiltered = async (name: string) => {
    try {
        return await RM_API.get(`/character/?name=${name}`);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

/** Get characters filtered by a given id */
export const getCharactersFilteredByID = async (id: number) => {
    try {
        return await RM_API.get(`/character/${id}`);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}