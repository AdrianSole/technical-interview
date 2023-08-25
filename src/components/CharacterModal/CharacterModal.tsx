"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import { Character } from "src/api/types/Character";
import { getStatusImg } from "src/utils/getStatusImg";

export interface CharacterModalProps {
  characterData: Character | undefined;
  isOpen: boolean;
  closeModal: (modalState: boolean) => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(153,229,153, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#7ccb2b",
    border: "2px solid #f17b85",
  },
};

const H2 = styled("h2")`
  color: #423460;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 25px;
`;

const CloseButton = styled("button")`
  background-color: #e57373;
  color: white;
  border: none;
  border-radius: 25px;
  margin-left: 17rem;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f44336;
  }
`;

const ProfImg = styled("img")`
  border: 2px solid #f17b85;
  border-radius: 50%;
  object-fit: cover;
`;

const Ol = styled("ol")`
  background-color: #99e599;
  border: 2px solid #f17b85;
  color: #423460;
  padding-top: 5px;
  li {
    padding-left: 10px;
    padding-bottom: 5px;
  }
`;

const Info = styled("div")`
  font-size: 18px;
  margin-left: 15rem;
  padding-top: 10px;
`;

export const CharacterModal = ({
  characterData,
  isOpen,
  closeModal,
}: CharacterModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => closeModal(false)}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example"
      >
        <CloseButton
          data-testid="closeButton"
          onClick={() => closeModal(false)}
        >
          X
        </CloseButton>
        <H2>{characterData?.name}</H2>
        <div data-testid="modalContent">
          <ProfImg src={characterData?.image} alt="alt" />
          <Ol>
            <li>
              <Image
                src={getStatusImg(characterData?.status)}
                alt=""
                width={35}
              />
            </li>
            <li>{characterData?.species}</li>
            <li>{characterData?.gender}</li>
            <li>{characterData?.type}</li>
          </Ol>
        </div>

        <Info>
          <Link
            href={`/character/${characterData?.id}`}
            style={{ textDecoration: "none" }}
          >
            Más Info
          </Link>
        </Info>
      </Modal>
    </>
  );
};
