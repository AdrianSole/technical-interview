import { useState } from "react";

export const useCacheID = () => {
  const [savedPages, setSavedPages] = useState<string[]>([]);
  const [pageNum, setPageNum] = useState<number>(1); // Starting at page 1

  /** If the pageName includes an 'N' its a next page */
  const isNext = (pageName: string): boolean => {
    console.log(pageName);
    return pageName.includes("N");
  };

  /**Creates a prev or next cachePageName with a stateNumber at the end*/
  const createPage = (pageName: string): string => {
    if (isNext(pageName)) {
      setPageNum((oldstate) => oldstate + 1);
    } else {
      setPageNum((oldstate) => oldstate - 1);
    }
    const newPage = pageName + pageNum;
    setSavedPages([...savedPages, newPage]);
    return newPage;
  };

  return {
    createPage,
  };
};
