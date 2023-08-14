import { useState } from "react";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";
import { getOnChangePage } from "src/utils/getOnChangePage";

export const useLocalStorage = () => {
  const [listState, setListState] = useState<Character[]>();
  const [paginationState, setPaginationState] = useState<PaginationInfo>();
  const [savedPages, setSavedPages] = useState<string[]>([]); // Names of pages saved on cache

  /** Sets list & pagination state for first page */
  const loadData = async () => {
    const cache = localStorage.getItem("cacheList");
    if (cache) {
      const results = JSON.parse(cache).results;
      const info = JSON.parse(cache).info;

      setListState(results);
      setPaginationState(info);
    } else {
      const res = await characterService.getCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem("cacheList", JSON.stringify(res.data));
    }
  };

  /** Sets list & pagination state for prev or next page */
  async function loadDifPageData(url: string | undefined, cacheID: string) {
    const cache = localStorage.getItem(cacheID);
    // If cache exists and its saved on the savedPages array will load cache data
    if (cache && savedPages.includes(cache)) {
      const results = JSON.parse(cache).results;
      const info = JSON.parse(cache).info;

      setListState(results);
      setPaginationState(info);
    } else {
      const res = await getOnChangePage(url);
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem(cacheID, JSON.stringify(res.data));
      setSavedPages([...savedPages, cacheID]); // If the page didnt exist saves its name
    }
  }

  return {
    listState,
    paginationState,
    loadData,
    loadDifPageData,
  };
};
