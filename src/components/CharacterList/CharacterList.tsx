import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { useCharacterList } from "../CharacterContext";
import Modal from "react-modal";
import { useState } from "react";
import { Character } from "src/api/types/Character";

const ListContainer = styled("div")`
  display: flex;
  background-color: #40e0d0;
  align-items: center;
  margin: 10px;
`;

const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 10px;
  background-color: #fff;
  width: 100%;
`;

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  padding-left: 34px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
    color: blue;
  }
`;

export const CharacterList = () => {
  const context = useCharacterList();

  //Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Character>();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ListContainer>
        <List>
          {context.listState?.map((characters) => (
            <ListItem
              key={characters.id}
              onClick={() => {
                openModal();
                setModalData(characters);
              }}
            >
              {characters.name}
            </ListItem>
          ))}
        </List>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example"
        >
          <h2>{modalData?.name}</h2>
          <button onClick={closeModal}>close</button>
          <div>
            <img src={modalData?.image} alt="alt" />
            <ol>
              <li>{modalData?.status}</li>
              <li>{modalData?.species}</li>
              <li>{modalData?.type}</li>
              <li>{modalData?.gender}</li>
              <li>{modalData?.created}</li>
            </ol>
          </div>
        </Modal>
        <Pagination onPrev={context.onPrev} onNext={context.onNext} />
      </ListContainer>
    </>
  );
};
