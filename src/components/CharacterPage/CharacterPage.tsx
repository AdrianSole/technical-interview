import styled from "@emotion/styled";
import Link from "next/link";
import { CharacterDetailsProps } from "@/pages/character/[character_id]";
import Portal from "../../assets/portal.png";
import Image from "next/image";

const Container = styled("div")`
  background-color: #99e599;
  border: 3px solid #f17b85;
  margin: 2rem;
`;

const Title = styled("h1")`
  font-size: 26px;
  font-weight: bold;
  color: #423460;
  text-align: center;
  padding: 10px;
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
  color: #f17b85;
  font-size: 18px;
  font-weight: bold;
`;

const Home = styled("div")`
  padding: 15px;
  text-align: center;
  &:hover {
    -webkit-transition: all 0.9s ease;
    -moz-transition: all 0.9s ease;
    -ms-transition: all 0.9s ease;
    transform: rotate(3deg);
    transform-origin: right;
  }
`;

export const CharacterPage = ({ characterData }: CharacterDetailsProps) => {
  return (
    <>
      <Container>
        <Title data-testid="title">{characterData?.name}</Title>
        <SubTitle data-testid="subtitle">{characterData?.status}</SubTitle>
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
            <Home>
              <Link href="/" data-testid="link">
                <Image src={Portal} alt="portal" width={35} />
              </Link>
            </Home>
          </InfoContainer>
          <ImgContainer>
            <img src={characterData?.image} alt="alt" />
          </ImgContainer>
        </Content>
      </Container>
    </>
  );
};
