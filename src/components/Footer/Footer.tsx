import Image from "next/image";
import MainIcon from "../../assets/mainIcon.png";
import styled from "@emotion/styled";

const FooterStyled = styled("footer")`
  background-color: #99e599;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Image src={MainIcon} alt="" width={50} />
    </FooterStyled>
  );
};
