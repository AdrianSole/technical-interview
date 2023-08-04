import Modal from "react-modal";
import { Character } from "src/api/types/Character";

// Export interface to test
export interface CharacterModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalData: Character | undefined;
}

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

export const CharacterModal = ({
  modalIsOpen,
  closeModal,
  modalData,
}: CharacterModalProps) => {
  return (
    <>
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
    </>
  );
};
