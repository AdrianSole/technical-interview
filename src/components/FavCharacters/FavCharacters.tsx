import styled from "@emotion/styled";
import Link from "next/link";
import { Character } from "src/api/types/Character";

import Image from "next/image";
import Delete from "../../assets/delete.png";
import { useFav } from "../FavCharacterContext";

const FavList = styled.div`
  background-color: #7ccb2b;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const FavButton = styled.div`
  background-color: #f17b85;
  color: #423460;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  margin-left: 5px;
`;

interface FavCharactersProps {
  favList: Character[];
}

export const FavCharacters = ({ favList }: FavCharactersProps) => {
  const context = useFav();

  return (
    <FavList>
      {favList?.map((favCharacter) => (
        <FavButton key={favCharacter.id}>
          <Link href={`/character/${favCharacter.id}`}>{favCharacter.name}</Link>
          <ImgContainer onClick={() => context.removeFav(favCharacter)}>
            <Image src={Delete} alt="" width={18} />
          </ImgContainer>
        </FavButton>
      ))}
    </FavList>
  );
};
