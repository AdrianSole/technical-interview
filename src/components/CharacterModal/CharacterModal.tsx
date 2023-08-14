import { useRouter } from "next/router";
import Modal from "react-modal";
import { Character } from "src/api/types/Character";

export interface CharacterModalProps {
  characterData: Character | undefined;
  isOpen: boolean;
  closeModal: (modalState: boolean) => void;
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
  characterData,
  isOpen,
  closeModal,
}: CharacterModalProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/CharacterDetails",
      query: {
        character_id: characterData?.id,
      },
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => closeModal(false)}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example"
      >
        <h2>{characterData?.name}</h2>
        <button data-testid="closeButton" onClick={() => closeModal(false)}>
          close
        </button>
        <div data-testid="modalContent">
          <img src={characterData?.image} alt="alt" />
          <ol>
            <li>{characterData?.status}</li>
            <li>{characterData?.species}</li>
            <li>{characterData?.type}</li>
            <li>{characterData?.gender}</li>
            <li>{characterData?.created}</li>
          </ol>
        </div>

        <button data-testid="moreContent" onClick={handleClick}>
          + info
        </button>
      </Modal>
    </>
  );
};
