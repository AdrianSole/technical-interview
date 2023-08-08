import {
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { Character } from "src/api/types/Character";
import * as characterService from "../../api/services/CharacterService";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import axios from "axios";

// Context
interface CharacterListState {
  listState: Character[] | undefined;
  modalIsOpen: boolean;
  modalData: Character | undefined;
  setModalData: Dispatch<SetStateAction<Character | undefined>>;
  onPrev: () => void;
  onNext: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const CharacterListContext = createContext<CharacterListState | undefined>(
  undefined
);

// Provider
export const CharacterProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [listState, setListState] = useState<Character[]>();
  const [paginationState, setPaginationState] = useState<PaginationInfo>();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Character>();

  const loadData = async () => {
    const res = await characterService.getCharacters();
    setListState(res.data.results);
    setPaginationState(res.data.info);

    localStorage.setItem("cacheList", JSON.stringify(res.data)); // Cache main request
  };

  const onPrev = () => {
    const prevURL = paginationState?.prev;

    const prevAPI = axios.create({
      baseURL: prevURL,
    });

    const getPrevCharacters = async () => {
      return await prevAPI.get("");
    };

    const loadPrevData = async () => {
      const res = await getPrevCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem("prevCacheData", JSON.stringify(res.data)); // Cache prevPage
    };

    // Prevent to go to a previous page that doesn't exists
    if (prevURL != undefined) {
      loadPrevData();
    }
  };

  const onNext = () => {
    const nextURL = paginationState?.next;

    const nextAPI = axios.create({
      baseURL: nextURL,
    });

    const getNextCharacters = async () => {
      return await nextAPI.get("");
    };

    const LoadNextData = async () => {
      const res = await getNextCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem("nextCacheData", JSON.stringify(res.data)); // Cache nextPage
    };

    if (nextURL != undefined) {
      LoadNextData();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const value = {
    listState,
    modalIsOpen,
    modalData,
    setModalData,
    onPrev,
    onNext,
    openModal,
    closeModal,
  };

  return (
    <CharacterListContext.Provider value={value}>
      {children}
    </CharacterListContext.Provider>
  );
};

// Hook
export function useCharacterList() {
  const context = useContext(CharacterListContext);

  if (context === undefined) {
    throw new Error("useCharacterList must be used within a AuthProvider");
  }

  return context;
}
