import * as CharacterService from "./CharacterService";
import { Character } from "../types/Character";

describe("getCharacters", () => {
    it("should return a list of characters", async () => {
        const characters = await CharacterService.getCharacters();
        expect(characters)
    });
});