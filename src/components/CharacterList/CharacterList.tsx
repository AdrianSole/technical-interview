import { useEffect, useState } from "react";
import { Character } from "src/api/types/Character";
import * as characterService from "../../api/services/CharacterService";
import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { Info } from "../../api/types/Info";
import axios from "axios";

const ListContainer = styled("div")`
  display: flex;
`;

const List = styled("ul")`
  list-style: none;
  padding: 0;
`;

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  margin-bottom: 10px;
`;

export const CharacterList = () => {
  const [listState, setListState] = useState<Character[]>();
  const [paginationState, setPaginationState] = useState<Info>();

  const loadData = async () => {
    const res = await characterService.getCharacters();
    setListState(res.data.results);
    setPaginationState(res.data.info);
  };

  const onPrev = () => {
    const prevURL = paginationState?.prev;
    
    const prevAPI = axios.create({
      baseURL: prevURL,
    });

    const getPrevCharacters = async () => {
      return await prevAPI.get("");
    }

    const loadPrevData = async () => {
      const res = await getPrevCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);
    }

    loadPrevData();
  }

  const onNext = () => {
    const nextURL = paginationState?.next;

    const nextAPI = axios.create({
      baseURL: nextURL,
    })

    const getNextCharacters = async () => {
      return await nextAPI.get("");
    }

    const LoadNextData = async () => {
      const res = await getNextCharacters();
      setListState(res.data.results);
      setPaginationState(res.data.info);
    }

    LoadNextData();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {console.log(paginationState)}
      <ListContainer>
        <List>
          {listState?.map((characters) => (
            <ListItem key={characters.id}>{characters.name}</ListItem>
          ))}
        </List>
        <Pagination prev={paginationState?.prev} next={paginationState?.next} onPrev={onPrev} onNext={onNext}/>
      </ListContainer>
    </>
  );
};
