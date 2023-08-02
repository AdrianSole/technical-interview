import Image from "next/image";
import Portal from "../../assets/portal.png";
import styled from "@emotion/styled";

const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
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

export const CharacterSearch = () => {
  return (
    <>
      <SearchContainer>
        <input type="text" placeholder="Search a character..." />
        <PortalButton type="button">
          <Image src={Portal} alt="Portal" width={20} />
        </PortalButton>
      </SearchContainer>
    </>
  );
};
