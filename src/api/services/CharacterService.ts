import { RM_API } from "../client/client";

export const getCharacters = async () => {
    return await RM_API.get("/character/");
}
