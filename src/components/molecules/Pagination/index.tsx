/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";

import * as S from "./styled";
export type paginationData = {
  number: number;
  totalPages: number;
  totalElements: number;
};
interface PaginationPros {
  totalPage: number;
  totalRegister: number;
  actualPage: number;
  setNumberPage: (page: number) => void;
}

const Pagination = ({
  totalPage,
  setNumberPage,
  actualPage,
}: PaginationPros) => {
  const [maxPageNumbers, setMaxPageNumbers] = useState<number>(
    totalPage < 10 ? totalPage : 10
  );
  const [pages, setPages] = useState<number[]>(
    new Array(maxPageNumbers).fill(0).map((n, index) => n + index)
  );

  useEffect(() => {
    if (actualPage < pages[0] || actualPage > pages[pages.length - 1]) {
      setPages(
        new Array(maxPageNumbers)
          .fill(actualPage)
          .map((n, index) => actualPage - index)
          .reverse()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage]);
  useEffect(() => {
    setPages(new Array(maxPageNumbers).fill(0).map((n, index) => n + index));
  }, [maxPageNumbers]);

  useEffect(() => {
    setMaxPageNumbers(totalPage < 10 ? totalPage : 10);
  }, [totalPage]);
  return (
    <S.Pagination>
      <span>Página</span>
      <S.Buttons>
        {pages.map((page, index) => (
          <button
            key={index}
            className={page === actualPage ? "actived" : ""}
            onClick={() => setNumberPage(page)}
          >
            {page + 1}
          </button>
        ))}
      </S.Buttons>
    </S.Pagination>
  );
};

export default Pagination;
