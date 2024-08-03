import React from "react";
import styled from "styled-components";

import { FaStar } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export function SearchSideBar() {
  const location = useLocation();

  const navigate = useNavigate();

  const queryies = queryString.parse(location.search);

  const handleRating = (rating) => {
    const newQuery = { ...queryies };

    newQuery.minimum_rating = `${rating}`;

    navigate(`/search?${queryString.stringify(newQuery)}`);
  };

  // .............This is the JSX return part............//

  return (
    <Wrapper>
      <div className="sidebar">
        <h2>Filters</h2>

        <div className="rating">
          <h3>Rating</h3>
          <div className="ratingStars">
            <h3>Rating on 1 - 5</h3>
            <div className="stars-1" onClick={() => handleRating(5)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
            </div>
            <div className="stars-2" onClick={() => handleRating(4)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-3" onClick={() => handleRating(3)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-4" onClick={() => handleRating(2)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-5" onClick={() => handleRating(1)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <h3>Rating on 6 - 10</h3>{" "}
            <div className="stars-1" onClick={() => handleRating(10)}>
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
            </div>
            <div className="stars-2" onClick={() => handleRating(9)}>
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <span>and Up</span>
            </div>
            <div className="stars-3" onClick={() => handleRating(8)}>
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <span>and Up</span>
            </div>
            <div className="stars-4" onClick={() => handleRating(7)}>
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <span>and Up</span>
            </div>
            <div className="stars-5" onClick={() => handleRating(6)}>
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon fill" />
              <span>and Up</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
  .sidebar {
    min-height: 100vh;
    padding-inline: 5px;

    h2 {
      font-size: 22px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      padding-top: 12px;
    }

    .rating {
      display: flex;
      flex-direction: column;

      h3 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 15px;
      }
      .ratingStars {
        width: 230px;
        display: flex;
        flex-direction: column;
        gap: 3px;
        border-top: 1px solid #222121;
        padding-block: 10px;

        .stars-1,
        .stars-2,
        .stars-3,
        .stars-4,
        .stars-5 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          padding-block: 2px;
          padding-left: 2px;
          border-radius: 5px;
          cursor: pointer;

          &:active {
            background: #c7fac7;
          }

          span {
            color: #888;
            font-size: 13px;
          }

          .star-icon {
            font-size: 20px;
          }

          .fill {
            color: #eeb420;
          }

          .empty {
            color: #dfdfdf;
          }
        }
      }
    }
  }
`;
