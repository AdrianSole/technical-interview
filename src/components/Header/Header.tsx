"use client";

import Image from "next/image";
import { CharacterSearch } from "../CharacterSearch";
import styled from "@emotion/styled";

import mainIcon from "../../assets/mainIcon.png";
import Link from "next/link";

const RM_Header = styled("header")`
  top: 0;
  left: 0;
  background-color: #7ccb2b;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const ImgContainer = styled("div")`
  margin: 5px;
`;

const H1 = styled("h1")`
  color: #423460;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
`;

const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
  
`;

export const Header = () => {
  return (
    <>
      <RM_Header data-testid="header">
        <ImgContainer>
          <Link href="/" data-testid="link">
            <Image src={mainIcon} width={50} alt="mainIcon" />
          </Link>
        </ImgContainer>
        <H1>Rick & Morty Character List</H1>
        <SearchContainer>
          <CharacterSearch />
        </SearchContainer>
      </RM_Header>
    </>
  );
};
