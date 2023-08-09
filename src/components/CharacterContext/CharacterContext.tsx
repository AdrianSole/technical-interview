import {
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Character } from "src/api/types/Character";
import * as characterService from "../../api/services/CharacterService";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import { getOnChangePage } from "src/utils/getOnChangePage";

// Context
interface CharacterListState {
  listState: Character[] | undefined;
  onPrev: () => void;
  onNext: () => void;
}

const CharacterListContext = createContext<CharacterListState | undefined>(
  undefined
);

// Provider
export const CharacterProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [listState, setListState] = useState<Character[]>();
  const [paginationState, setPaginationState] = useState<PaginationInfo>();

  const loadData = async () => {
    const cacheData = localStorage.getItem("cacheList");
    if (cacheData) {
      const results = JSON.parse(cacheData).results;
      const info = JSON.parse(cacheData).info;

      setListState(results);
      setPaginationState(info);
    } else {
      const res = await characterService.getCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem("cacheList", JSON.stringify(res.data));
    }
  };

  const onPrev = () => {
    const prevURL = paginationState?.prev;

    const loadPrevData = async () => {
      const res = await getOnChangePage(prevURL);
      setListState(res.data.results);
      setPaginationState(res.data.info);

      //localStorage.setItem("prevCacheData", JSON.stringify(res.data)); // Cache prevPage
    };

    // Prevent to go to a previous page that doesn't exists
    if (prevURL !== null) {
      loadPrevData();
    }
  };

  const onNext = () => {
    const nextURL = paginationState?.next;

    const LoadNextData = async () => {
      const res = await getOnChangePage(nextURL);
      setListState(res.data.results);
      setPaginationState(res.data.info);

      //localStorage.setItem("nextCacheData", JSON.stringify(res.data)); // Cache nextPage
    };

    if (nextURL !== null) {
      LoadNextData();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const value = {
    listState,
    onPrev,
    onNext,
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
