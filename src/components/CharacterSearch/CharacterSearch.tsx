import Image from "next/image";
import Portal from "../../assets/portal.png";
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { Character } from "src/api/types/Character";
import styles from "./CharacterSearch.module.css";
import axios from "axios";

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
    const filterURL = axios.create({
      baseURL: "https://rickandmortyapi.com/api/character",
    });

    const getFilteredCharacters = async (name: string) => {
      try {
        return await filterURL.get(`?name=${name}`);
      } catch (error) {
        console.log(error);
      }
    };

    const loadFilteredData = async () => {
      console.log(searchValue);
      console.log(await getFilteredCharacters(searchValue));
      const res = await getFilteredCharacters(searchValue);
      setSuggestions(res?.data.results);
      console.log(suggestions);
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
          >
            {suggestions?.map((suggestion) => (
              <SuggestionDiv key={suggestion.id}>
                {suggestion.name}
              </SuggestionDiv>
            ))}
          </div>
        </div>
        <PortalButton type="button">
          <Image src={Portal} alt="Portal" width={20} />
        </PortalButton>
      </SearchContainer>
    </>
  );
};
