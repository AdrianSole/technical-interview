import { useState } from "react";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";
import { getOnChangePage } from "src/utils/getOnChangePage";

export const useLocalStorage = () => {
  const [listState, setListState] = useState<Character[]>();
  const [paginationState, setPaginationState] = useState<PaginationInfo>();

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

  async function loadDifPageData(url: string | undefined, cacheID: string) {
    const cache = localStorage.getItem(cacheID);
    if (cache) {
      const results = JSON.parse(cache).results;
      const info = JSON.parse(cache).info;

      setListState(results);
      setPaginationState(info);
    } else {
      const res = await getOnChangePage(url);
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem(cacheID, JSON.stringify(res.data));
    }
  }

  return {
    listState,
    paginationState,
    loadData,
    loadDifPageData,
  };
};
