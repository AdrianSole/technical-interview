import {
  FC,
  PropsWithChildren,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Character } from "src/api/types/Character";
import { getOnChangePage } from "src/utils/getOnChangePage";
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
  const {
    listState,
    setListState,
    paginationState,
    setPaginationState,
    loadData,
  } = useLocalStorage();

  const onPrev = () => {
    const prevURL = paginationState?.prev;

    const loadPrevData = async () => {
      const cache = localStorage.getItem("cachePrevPage");
      if (cache) {
        const results = JSON.parse(cache).results;
        const info = JSON.parse(cache).info;

        setListState(results);
        setPaginationState(info);
      } else {
        const res = await getOnChangePage(prevURL);
        setListState(res.data.results);
        setPaginationState(res.data.info);

        localStorage.setItem("cachePrevPage", JSON.stringify(res.data));
      }
    };

    if (prevURL !== null) {
      loadPrevData();
    }
  };

  const onNext = () => {
    const nextURL = paginationState?.next;

    const LoadNextData = async () => {
      const cache = localStorage.getItem("cacheNextPage");
      if (cache) {
        const results = JSON.parse(cache).results;
        const info = JSON.parse(cache).info;

        setListState(results);
        setPaginationState(info);
      } else {
        const res = await getOnChangePage(nextURL);
        setListState(res.data.results);
        setPaginationState(res.data.info);

        localStorage.setItem("cacheNextPage", JSON.stringify(res.data));
      }
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
