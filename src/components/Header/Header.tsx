import Image from "next/image";
import { CharacterSearch } from "../CharacterSearch";
import styled from "@emotion/styled";

import mainIcon from "../../assets/mainIcon.png";

const RM_Header = styled("header")`
  top: 0;
  left: 0;
  width: 100%;
  background-color: #99e599;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;
`;

const H1 = styled("h1")`
  color: #fff;
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const SearchContainer = styled('div')`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

export const Header = () => {
  return (
    <>
      <RM_Header>
        <Image src={mainIcon} width={50} alt="mainIcon" />
        <H1>Rick & Morty Character List</H1>
        <SearchContainer>
          <CharacterSearch />
        </SearchContainer>
      </RM_Header>
    </>
  );
};
