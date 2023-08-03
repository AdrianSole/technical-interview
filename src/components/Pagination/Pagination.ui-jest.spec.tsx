import React from "react";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("should call the `onPrev` prop when the previous button is clicked, ", () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();

    render(<Pagination onPrev={onPrev} onNext={onNext} />);

    const prevButton = screen.getByTestId("previous");
    prevButton.click();
    expect(onPrev).toBeCalled();
  });

  it("should call the 'onNext' prop when the next button is clicked, ", () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();

    render(<Pagination onPrev={onPrev} onNext={onNext} />);

    const nextButton = screen.getByTestId("next");
    nextButton.click();
    expect(onNext).toBeCalled();
  });
});
