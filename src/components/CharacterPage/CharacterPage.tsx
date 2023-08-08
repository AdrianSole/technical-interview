import { useEffect, useState } from "react";
import * as characterFilterService from "../../api/services/CharacterFilterService";
import { Character } from "src/api/types/Character";
import styled from "@emotion/styled";
import Link from "next/link";

const Title = styled("h1")`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const SubTitle = styled("h2")`
  font-size: 18px;
  text-align: center;
`;

const Content = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
`;

const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin: 40px;
  margin-left: 200px;
`;

const ImgContainer = styled("div")`
  margin-top: 100px;
  margin-left: 300px;
`;

const P = styled("p")`
  margin: 15px;
  overflow: hidden;
`;

const Bold = styled("b")`
  font-size: 18px;
  font-weight: bold;
`;

export interface CharacterPageProps {
  id: number;
}

export const CharacterPage = ({ id }: CharacterPageProps) => {
  const [characterData, setCharacterData] = useState<Character>();

  const loadCharacterData = async () => {
    const res = await characterFilterService.getCharactersFilteredByID(id);
    setCharacterData(res?.data);

    //localStorage.setItem("cacheCharacterPage", JSON.stringify(res?.data));
  };

  useEffect(() => {
    loadCharacterData();
  });

  return (
    <>
      <Title data-testid="title">{characterData?.name}</Title>
      <SubTitle data-testid="subtitle">
        Status: {characterData?.status}
      </SubTitle>
      <Content data-testid="content">
        <InfoContainer>
          <P>
            <Bold>Species: </Bold>
            {characterData?.species}
          </P>
          <P>
            <Bold>Type: </Bold>
            {characterData?.type}
          </P>
          <P>
            <Bold>Gender: </Bold>
            {characterData?.gender}
          </P>
          <P>
            <Bold>Origin name: </Bold>
            {characterData?.origin?.name}
          </P>
          <P>
            <Bold>Origin url: </Bold>
            {characterData?.origin?.url}
          </P>
          <P>
            <Bold>Location name: </Bold>
            {characterData?.location?.name}
          </P>
          <P>
            <Bold>Location url: </Bold>
            {characterData?.location?.url}
          </P>
          <P>
            <Bold>URL: </Bold>
            {characterData?.url}
          </P>
          <P>
            <Bold>Episodes: </Bold>
            {characterData?.episode}
          </P>
          <P>
            <Bold>Created: </Bold>
            {characterData?.created}
          </P>
          <Link href="/" data-testid="link">
            Return home
          </Link>
        </InfoContainer>
        <ImgContainer>
          <img src={characterData?.image} alt="alt" />
        </ImgContainer>
      </Content>
    </>
  );
};
