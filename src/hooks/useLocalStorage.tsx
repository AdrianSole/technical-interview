import { useState } from "react";
import { Character } from "src/api/types/Character";
import { PaginationInfo } from "src/api/types/PaginationInfo";
import * as characterService from "../api/services/CharacterService";
import { getOnChangePage } from "src/utils/getOnChangePage";

interface loadDifPageDataProps {
  url: string | undefined;
  cacheId: string;
}

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

  const loadDifPageData = async ({ url, cacheId }: loadDifPageDataProps) => {
    const cache = localStorage.getItem(cacheId);
    if (cache) {
      const results = JSON.parse(cache).results;
      const info = JSON.parse(cache).info;

      setListState(results);
      setPaginationState(info);
    } else {
      const res = await getOnChangePage(url);
      setListState(res.data.results);
      setPaginationState(res.data.info);

      localStorage.setItem(cacheId, JSON.stringify(res.data));
    }
  };

  return {
    listState,
    setListState,
    paginationState,
    setPaginationState,
    loadData,
    loadDifPageData
  };
};
