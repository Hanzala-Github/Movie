import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { MOVIES_QUALITIES } from "../../constants/Moviequalites";

export function SearchSideBar() {
  const [activeStar, setActiveStar] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const queryies = queryString.parse(location.search);

  const handleRating = (rating, starId) => {
    const newQuery = { ...queryies };
    newQuery.minimum_rating = `${rating}`;
    navigate(`/search?${queryString.stringify(newQuery)}`);
    setActiveStar(starId); // Set the active star
  };

  const lines = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const handleQuality = (e) => {
    const newQuery2 = { ...queryies };

    newQuery2.quality = e.target.value;

    navigate(`/search?${queryString.stringify(newQuery2)}`);
  };

  // ............This is the JSX return part........//

  return (
    <Wrapper>
      <div className="sidebar">
        <h2>Filters</h2>
        <div className="rating">
          <h3>Rating</h3>
          <div className="ratingStars">
            {lines.map((stars, lineIndex) => (
              <div
                key={lineIndex}
                id={`stars-${lineIndex + 1}`}
                className={`star-line ${
                  activeStar === `stars-${lineIndex + 1}` ? "active" : ""
                }`}
                onClick={() => handleRating(stars, `stars-${lineIndex + 1}`)}
              >
                {Array.from({ length: 10 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`star-icon ${
                      starIndex < stars ? "fill" : "empty"
                    }`}
                  />
                ))}
                <span style={{ color: "#6AC045" }}>+ ({stars})</span>
              </div>
            ))}
          </div>
        </div>
        <div className="qualities">
          <p>Qualities</p>
          <select className="select" onChange={(e) => handleQuality(e)}>
            {MOVIES_QUALITIES.map((qual, i) => (
              <option value={qual.label} className="option">
                {qual.value}
              </option>
            ))}
          </select>
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
        width: 275px;
        display: flex;
        flex-direction: column;
        border-top: 1px solid #222121;
        padding-block: 10px;

        .star-line {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          padding-block: 4px;
          padding-inline: 5px;
          border-radius: 5px;
          cursor: pointer;

          span {
            color: #888;
            font-size: 13px;
          }

          .star-icon {
            font-size: 12px;
          }
          .fill {
            color: #eeb420;
          }
          .empty {
            color: #dfdfdf;
          }
          &.active {
            background: #3e613e;
          }
        }
      }
    }

    .qualities {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
      gap: 10px;
      p {
        font-size: 12px;
        color: #999;
      }
      .select {
        width: 140px;
        padding: 8px 30px;
        border-radius: 40px;
        /* -webkit-appearance: none; */
        box-sizing: border-box;
        color: #acaaaa;
        background: url(../images/website/select-arrows.svg) no-repeat 115px
          12px #282828;
        border: 0;
        .option {
          color: #999;
          padding-block: 20px;
          border-bottom: 2px solid red;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
  /* ................This is the @media query part.................... */
  @media (max-width: 991px) {
    height: min-content;
    .sidebar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .rating {
        width: 80%;
        align-items: center;
        justify-content: center;

        .ratingStars {
          width: 100%;
          align-items: center;
          justify-content: center;

          .star-line {
            .star-icon {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 560px) {
    .sidebar {
      .rating {
        .ratingStars {
          .star-line {
            .star-icon {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;
