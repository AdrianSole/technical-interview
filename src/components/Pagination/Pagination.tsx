interface NavigationProps {
  prev: string | undefined;
  next: string | undefined;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination = ({ prev, next, onPrev, onNext }: NavigationProps) => {
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
            <button onClick={() => handlePrevClick()}>Prev</button>
          </li>
          <li>
            <button onClick={() => handleNextClick()}>Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
