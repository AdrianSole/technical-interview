import { useState, ChangeEvent } from "react";
import { Character } from "src/api/types/Character";
import * as CharacterFilterService from "../api/services/CharacterFilterService";

type Change = ChangeEvent<HTMLInputElement>;

export const useCharacterSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<Character[]>();
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const filterCharacters = () => {
    const loadFilteredData = async () => {
      const res = await CharacterFilterService.getCharactersFiltered(
        searchValue
      );
      setSuggestions(res?.data.results);
    };

    loadFilteredData();
  };

  const handleChange = (e: Change) => {
    setSearchValue(e.target.value);
    filterCharacters();
  };

  const onFocus = () => {
    setHideSuggestions(false);
  }

  const onBlur = async () => {
    setTimeout(() => {
        setHideSuggestions(true);
    }, 200);
  }

  return {
    searchValue,
    handleChange,
    setHideSuggestions,
    onBlur,
    hideSuggestions,
    suggestions
  }
};
