import { RM_API } from "../client/client";
import { Character } from "../types/Character";

export const getCharacters = async () => {
    return await RM_API.get("/character/");
}

//TODO: getCharacter