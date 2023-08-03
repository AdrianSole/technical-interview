import { RM_API } from "../client/client";

export const getCharactersFiltered = async (name: string) => {
    try{
        return await RM_API.get(`/character/?name=${name}`);
    }catch (error) {
        console.log(error);
        return undefined;
    }
}