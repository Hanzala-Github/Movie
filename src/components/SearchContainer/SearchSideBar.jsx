import React from "react";
import styled from "styled-components";

import { FaStar } from "react-icons/fa6";

export function SearchSideBar() {
  return (
    <Wrapper>
      <div className="sidebar">
        <h2>Filters</h2>

        <div className="rating">
          <h3>Rating</h3>
          <div className="ratingStars">
            <div className="stars-1">
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
            </div>
            <div className="stars-2">
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-3">
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-4">
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <span>and Up</span>
            </div>
            <div className="stars-5">
              <FaStar className="star-icon fill" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
              <FaStar className="star-icon empty" />
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
        margin-block: 20px;
        font-weight: 500;
      }
      .ratingStars {
        display: flex;
        flex-direction: column;
        gap: 3px;
        border-top: 1px solid #99999939;
        padding-block: 10px;

        .stars-1,
        .stars-2,
        .stars-3,
        .stars-4,
        .stars-5 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 7px;
          padding-block: 2px;
          padding-left: 2px;
          border-radius: 5px;
          cursor: pointer;

          &:active {
            background: #c7fac7;
          }

          span {
            color: #888;
          }

          .star-icon {
            font-size: 30px;
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
