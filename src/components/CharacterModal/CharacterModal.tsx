import { useRouter } from "next/router";
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
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/CharacterDetails",
      query: {
        character_id: modalData?.id
      }
    });
  };
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
        <button data-testid="closeButton" onClick={closeModal}>close</button>
        <div data-testid="modalContent">
          <img src={modalData?.image} alt="alt" />
          <ol>
            <li>{modalData?.status}</li>
            <li>{modalData?.species}</li>
            <li>{modalData?.type}</li>
            <li>{modalData?.gender}</li>
            <li>{modalData?.created}</li>
          </ol>
        </div>

        <button onClick={handleClick}>+ info</button>
      </Modal>
    </>
  );
};
