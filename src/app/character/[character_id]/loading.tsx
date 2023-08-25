"use client";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LoadingAnimation = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #99e599;
  border-radius: 50%;
  animation: ${spinAnimation} 2s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: white;
`;

export default function Loading() {
  return (
    <>
      <LoadingScreenWrapper>
      <LoadingAnimation />
      <LoadingText>Loading ...</LoadingText>
    </LoadingScreenWrapper>
    </>
  );
}
