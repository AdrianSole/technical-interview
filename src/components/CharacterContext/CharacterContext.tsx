import {
  FC,
  PropsWithChildren,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Character } from "src/api/types/Character";
import { useLocalStorage } from "src/hooks/useLocalStorage";

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
  const { listState, paginationState, loadData, loadDifPageData } =
    useLocalStorage();

  const onPrev = () => {
    const prevURL = paginationState?.prev;
    let pageNumOnCache = Math.floor(Math.random() * 100000);
    const cacheID = "cachePrevPage" + pageNumOnCache;
    if (prevURL !== null) {
      loadDifPageData(prevURL, cacheID);
    }
  };

  const onNext = () => {
    const nextURL = paginationState?.next;
    let pageNumOnCache = Math.floor(Math.random() * 100000);
    const cache = "cacheNextPage" + pageNumOnCache;
    if (nextURL !== null) {
      loadDifPageData(nextURL, cache);
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
