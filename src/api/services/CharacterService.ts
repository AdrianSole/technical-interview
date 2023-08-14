import { RM_API } from "../client/client";

/** Get all characters */
export const getCharacters = async () => {
    return await RM_API.get("/character/");
}
