import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Character } from "src/api/types/Character";
import styles from "./CharacterSearch.module.css";
import * as CharacterFilterService from "../../api/services/CharacterFilterService";

const SearchContainer = styled("div")`
  width: 30rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const TextBox = styled("input")`
  border: 1px solid #f3f3f3;
  height: 2rem;
  outline: none;
  box-sizing: border-box;
  padding: 1px 10px;
  transition: 0.2s ease-in-out;
  width: 100%;
  &:focus {
    border: 1px solid blue;
    transition: 0.2s ease-in-out;
  }
`;

const PortalButton = styled("button")`
  background-color: #99e599;
  border: none;
  color: white;
  margin: 15px;
  display: inline-block;
  overflow: hidden;
  &:hover {
    -webkit-transition: all 0.9s ease;
    -moz-transition: all 0.9s ease;
    -ms-transition: all 0.9s ease;
    transform: scale(1.35);
  }
`;

const SuggestionDiv = styled("div")`
  cursor: pointer;
  box-sizing: border-box;
  padding: 1px 10px;
  height: 2rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f3f3f3;
  }
`;

type Change = ChangeEvent<HTMLInputElement>;

export const CharacterSearch = () => {
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

  return (
    <>
      <SearchContainer>
        <div>
          <TextBox
            data-testid="textbox"
            type="text"
            placeholder="Search a character..."
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setHideSuggestions(false)}
            onBlur={async () => {
              setTimeout(() => {
                setHideSuggestions(true);
              }, 200);
            }}
          />
          <div
            className={`${styles["suggestions"]} ${
              hideSuggestions && styles["hidden"]
            }`}
            data-testid="suggestions"
          >
            {suggestions?.map((suggestion) => (
              <SuggestionDiv key={suggestion.id}>
                {suggestion.name}
              </SuggestionDiv>
            ))}
          </div>
        </div>
      </SearchContainer>
    </>
  );
};
