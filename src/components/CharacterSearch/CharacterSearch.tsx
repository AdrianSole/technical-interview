"use client";

import styled from "@emotion/styled";
import styles from "./CharacterSearch.module.css";
import Link from "next/link";
import { useCharacterSearch } from "src/hooks/useCharacterSearch";

const SearchContainer = styled("div")`
  width: 30rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const TextBox = styled("input")`
  border: 3px solid #f17b85;
  background-color: #99e599;
  color: #423460;
  height: 2rem;
  outline: none;
  padding: 1px 10px;
  transition: 0.2s ease-in-out;
  width: 100%;
  margin-left: 100px;
  &:focus {
    border: 1px solid blue;
    transition: 0.2s ease-in-out;
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
    color: #f17b85;
    background-color: #423460;
  }
`;

export const CharacterSearch = () => {
  const {
    searchValue,
    handleChange,
    onFocus,
    onBlur,
    hideSuggestions,
    suggestions,
  } = useCharacterSearch();

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
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <div
            className={`${styles["suggestions"]} ${
              hideSuggestions && styles["hidden"]
            }`}
            data-testid="suggestions"
          >
            {suggestions?.map((suggestion) => (
              <SuggestionDiv key={suggestion.id}>
                <Link
                  href={`/character/${suggestion?.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {suggestion.name}
                </Link>
              </SuggestionDiv>
            ))}
          </div>
        </div>
      </SearchContainer>
    </>
  );
};
