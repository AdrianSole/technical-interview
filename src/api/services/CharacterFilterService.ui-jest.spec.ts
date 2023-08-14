import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
    getCharactersFiltered,
    getCharactersFilteredByID,
} from "./CharacterFilterService";


describe("Character API functions", () => {
    const mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset();
    });

    it("should handle error when getting characters filtered by name", async () => {
        mock.onGet("/character/").reply(500);

        const name = "Nonexistent Character";
        const response = await getCharactersFiltered(name);

        expect(response).toBeUndefined();
    });

    it("should handle error when getting a character by ID", async () => {
        mock.onGet("/character/1").reply(500);
        const response = await getCharactersFilteredByID(0);

        expect(response).toBeUndefined();
    });
});
