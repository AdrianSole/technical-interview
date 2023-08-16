import Previous from "../../assets/previous.png";
import Next from "../../assets/next.png";
import Image from "next/image";
import styled from "@emotion/styled";

const ButtonStyled = styled("button")`
  background-color: #40e0d0;
  border: none;
  color: white;
  margin: 15px;
  display: inline-block;
  overflow: hidden;
  &:hover {
    -webkit-transition:all .9s ease;
    -moz-transition:all .9s ease;
    -ms-transition:all .9s ease;
    transform:scale(1.35);
  }
  &:active {
    background-color: red;
  }
`;

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination = ({ onPrev, onNext }: NavigationProps) => {
  const handlePrevClick = () => {
    onPrev();
  };

  const handleNextClick = () => {
    onNext();
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <ButtonStyled onClick={handlePrevClick} data-testid="previous">
              <Image src={Previous} alt="Previous" width={25} />
            </ButtonStyled>
          </li>
          <li>
            <ButtonStyled onClick={handleNextClick} data-testid="next">
              <Image src={Next} alt="Next" width={25} />
            </ButtonStyled>
          </li>
        </ul>
      </nav>
    </>
  );
};
