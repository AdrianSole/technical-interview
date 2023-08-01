import { useEffect, useState } from "react";
import { Character } from "src/api/types/Character";
import * as characterService from "../../api/services/CharacterService";

export const CharacterList = () => {
  const [listState, setListState] = useState<[]>();

  const loadCharacters = async () => {
    const res = await characterService.getCharacters();
    setListState(res.data.results);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      <div>
        <ul>
          {listState.map((characters) => (
            <li>{characters.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
