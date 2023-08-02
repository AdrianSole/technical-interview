import styled from "@emotion/styled";
import { Pagination } from "../Pagination";
import { useCharacterList } from "../CharacterContext";

const ListContainer = styled("div")`
  display: flex;
  background-color: #40e0d0;
  align-items: center;
  margin: 10px;
`;

const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 10px;
  background-color: #fff;
  width: 100%;
`;

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  margin: 10px;
`;

export const CharacterList = () => {
  const context = useCharacterList();

  return (
    <>
      {console.log(context.paginationState)}
      <ListContainer>
        <List>
          {context.listState?.map((characters) => (
            <ListItem key={characters.id}>{characters.name}</ListItem>
          ))}
        </List>
        <Pagination onPrev={context.onPrev} onNext={context.onNext} />
      </ListContainer>
    </>
  );
};
