import {
  FC,
  PropsWithChildren,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Character } from "src/api/types/Character";
import { useCacheID } from "src/hooks/useCacheID";
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

  const { createPage } = useCacheID();

  /** Click <-, returns prev page */
  const onPrev = () => {
    const prevURL = paginationState?.prev;
    const cacheID = createPage("cachePrevPage");
    if (prevURL !== null) {
      loadDifPageData(prevURL, cacheID);
    }
  };

  /** Click ->, returns next page */
  const onNext = () => {
    const nextURL = paginationState?.next;
    const cacheID = createPage("cacheNextPage");
    console.log(cacheID);
    if (nextURL !== null) {
      loadDifPageData(nextURL, cacheID);
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
