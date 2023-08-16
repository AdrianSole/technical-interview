import Image from "next/image";
import MainIcon from "../../assets/mainIcon.png";
import styled from "@emotion/styled";

const FooterStyled = styled("footer")`
  background-color: #7ccb2b;
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
    <FooterStyled data-testid="footer">
      <Image src={MainIcon} alt="Main Icon" width={50} />
    </FooterStyled>
  );
};
