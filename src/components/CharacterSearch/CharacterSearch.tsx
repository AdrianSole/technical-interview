import Image from "next/image";
import Portal from "../../assets/portal.png";
import styled from "@emotion/styled";
import { useCharacterList } from "../CharacterContext";
import { ChangeEvent, useEffect, useState } from "react";
import { Character } from "src/api/types/Character";
import styles from "./CharacterSearch.module.css";

const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 30rem;
  position: relative;
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

type Change = ChangeEvent<HTMLInputElement>;

export const CharacterSearch = () => {
  const context = useCharacterList();

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<Character[] | undefined>([]);
  const [hideSuggestions, setHideSuggestions] = useState(false);

  const handleChange = (e: Change) => {
    setSearchValue(e.target.value);
    setSuggestions(context.listState);
  };

  return (
    <>
      <SearchContainer>
        <TextBox
          type="text"
          placeholder="Search a character..."
          value={searchValue}
          onChange={handleChange}
        />
        <div
          className={`${styles["suggestions"]} ${
            hideSuggestions && styles["hidden"]
          }`}
        >
          {suggestions?.map((suggestion) => (
            <div className={styles.suggestion}>{suggestion.name}</div>
          ))}
        </div>
        <PortalButton type="button">
          <Image src={Portal} alt="Portal" width={20} />
        </PortalButton>
      </SearchContainer>
    </>
  );
};
