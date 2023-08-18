"use client";

import Image from "next/image";
import MainIcon from "../../assets/mainIcon.png";
import styled from "@emotion/styled";

const FooterStyled = styled("footer")`
  background-color: #7ccb2b;
  color: #423460;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const CopyrightText = styled("p")`
  margin: 0;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <FooterStyled data-testid="footer">
      <Image src={MainIcon} alt="Main Icon" width={50} />
      <CopyrightText>&copy; Adrián Solé</CopyrightText>
    </FooterStyled>
  );
};
