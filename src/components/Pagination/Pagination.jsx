import queryString from "query-string";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Pagination({ totalPages }) {
  const navigate = useNavigate();

  const location = useLocation();
  const queries = queryString.parse(location.search);

  const page = Number(queries.page || 1);

  const leftPages = Math.min(3, Math.max(page - 1, 0));
  const rightPages = Math.min(3, Math.max(totalPages - page, 0));

  // ......Pagination Next and previous button..........//

  const queryies2 = queryString.parse(location.search);

  const handlePrevious = () => {
    const newQuery = { ...queryies2 };
    newQuery.page = Math.max(page - 1 || 1, 0);
    navigate(`${location.pathname}?${queryString.stringify(newQuery)}`);
  };

  const handleNext = () => {
    const newQuery2 = { ...queryies2 };

    newQuery2.page = Math.min(page + 1 || 1, totalPages);
    navigate(`${location.pathname}?${queryString.stringify(newQuery2)}`);
  };

  const handleSpanBlock = (num) => {
    const newQuery3 = { ...queryies2 };

    newQuery3.page = num;

    navigate(`${location.pathname}?${queryString.stringify(newQuery3)}`);
  };

  // ............This is the JSX return part..........//
  return (
    <Wrapper>
      <div className="pagination-wrapper">
        <button className="btn1" onClick={handlePrevious}>
          ⬅ Prev
        </button>
        {page > 3 ? (
          <>
            <span className="left" onClick={() => handleSpanBlock(1)}>
              {1}
            </span>
            <span className="dots">....</span>
          </>
        ) : null}
        {Array.from({ length: leftPages })
          .map((_, i) => (
            <span
              key={i}
              className="left"
              onClick={() => handleSpanBlock(page - i - 1)}
            >
              {page - i - 1}
            </span>
          ))
          .reverse()}
        <span className="show-current-page">{page}</span>
        {Array.from({ length: rightPages }).map((_, i) => (
          <span
            key={i}
            className="right"
            onClick={() => handleSpanBlock(page + i + 1)}
          >
            {page + i + 1}
          </span>
        ))}
        {page < 3102 ? (
          <>
            <span className="dots">....</span>
            <span className="right" onClick={() => handleSpanBlock(totalPages)}>
              {totalPages}
            </span>
          </>
        ) : null}
        <button className="btn2" onClick={handleNext}>
          Next ➡
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 800px; */
  margin-block: 30px;
  margin-inline: auto;

  .pagination-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span {
      padding-inline: 5px;
      width: 45px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #1d1c1c;
      color: #fff;
      font-size: 13px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: #6ac045;
      }
    }

    .show-current-page {
      background-color: #6ac045;
    }

    button {
      width: 80px;
      height: 50px;
      font-size: 15px;
      background-color: transparent;
      color: #fff;
      border: 1px solid #1d1c1c;
      border-radius: 8px;
      cursor: pointer;
      user-select: none;
    }
  }

  @media (max-width: 768px) {
    .pagination-wrapper {
      gap: 5px;

      span {
        width: 40px;
        height: 40px;
        font-size: 10px;
        font-weight: 500;
      }

      button {
        width: 50px;
        height: 40px;
        font-size: 10px;
      }
    }
  }
  @media (max-width: 560px) {
    .pagination-wrapper {
      gap: 5px;
      flex-wrap: wrap;
      /* flex-direction: column; */

      span {
        width: 65px;
        height: 40px;
        font-size: 13px;
        font-weight: 500;
      }

      button {
        width: 80px;
        height: 40px;
        font-size: 15px;
      }
    }
  }
`;
