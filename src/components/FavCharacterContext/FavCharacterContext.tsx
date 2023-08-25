"use client";

import { StaticImageData } from "next/image";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Character } from "src/api/types/Character";
import { getStar } from "src/utils/getStar";

interface FavCharacterState {
  favState: boolean[];
  favListState: Character[];
  hasAnyFavorite: boolean;
  handleFavUnfav: (id: number, character: Character) => void;
  removeFav: (favItem: Character) => void;
  addRemoveStar: (character: Character) => StaticImageData;
}

const FavCharacterContext = createContext<FavCharacterState | undefined>(
  undefined
);

interface FavCharacterProviderProps {}

export const FavCharacterProvider: FC<
  PropsWithChildren<FavCharacterProviderProps>
> = ({ children }) => {
  const [favState, setFavState] = useState<boolean[]>([]);
  const [favListState, setFavListState] = useState<Character[]>([]);

  const hasAnyFavorite = favState.some((val) => val);

  const isFav = (character: Character) => {
    return favListState.some((char) => char.id === character.id);
  };

  const handleFavUnfav = (id: number, character: Character) => {
    const updatedFav = [...favState];
    updatedFav[id] = !updatedFav[id];
    setFavState(updatedFav);

    if (isFav(character)) {
      const updatedFavList = favListState.filter(
        (char) => char.id !== character.id
      );
      setFavListState(updatedFavList);
    } else {
      setFavListState([...favListState, character]);
    }
  };

  const removeFav = (character: Character) => {
    const updatedFav = [...favState];
    updatedFav[character.id] = !updatedFav[character.id];
    setFavState(updatedFav);

    const updatedFavList = favListState.filter(
      (char) => char.id !== character.id
    );
    setFavListState(updatedFavList);
  };

  const addRemoveStar = (character: Character) => {
    return getStar(favState[character.id]);
  };

  const value = {
    favState,
    favListState,
    hasAnyFavorite,
    handleFavUnfav,
    removeFav,
    addRemoveStar,
  };

  return (
    <FavCharacterContext.Provider value={value}>
      {children}
    </FavCharacterContext.Provider>
  );
};

export function useFav() {
  const context = useContext(FavCharacterContext);
  if (context === undefined) {
    throw new Error("useFav must be used within a AuthProvider");
  }
  return context;
}
