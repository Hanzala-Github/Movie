import React, { useState } from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt, TfiMenuAlt } from "react-icons/tfi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SORT_BY_FILTERS } from "../../constants/SortByFilters";
import queryString from "query-string";
import { GENRES } from "../../constants/genres";

export function SearchViewBar(props) {
  const { setShowView } = props;
  const [isGridActive, setIsGridActive] = useState(true);

  // const [genresFilter, setGenresFilter] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const queries = queryString.parse(location.search);

  const handleGridClick = () => {
    setIsGridActive(true);
    setShowView(false);
  };

  const handleListClick = () => {
    setIsGridActive(false);
    setShowView(true);
  };

  const handleSortSelect = (e) => {
    const newQueries = { ...queries };

    newQueries.sort_by = e.target.value;
    navigate(`/search?${queryString.stringify(newQueries)}`);
  };

  const handleGenres = (e) => {
    const queryies = queryString.parse(location.search);
    const newQuery = { ...queryies };

    newQuery.genre = e.target.value;
    navigate(`/search?${queryString.stringify(newQuery)}`);
  };

  // ............This is the JSX return paert........//

  return (
    <Wrapper>
      <div className="view-bar">
        <div className="search-result">
          <h3>
            20 items found for <span>"searchData"</span>
          </h3>
        </div>
        <div className="view-dropdown">
          <div className="genres-drop-down">
            <p>Genres</p>
            <select className="select" onChange={(e) => handleGenres(e)}>
              {GENRES.map((genres, i) => (
                <option key={i} className="option" value={genres.value}>
                  {genres.label}
                </option>
              ))}
            </select>
          </div>

          <div className="selection">
            <p>Sort By</p>
            <select className="select" onChange={handleSortSelect}>
              {SORT_BY_FILTERS.map((attribute, i) => (
                <option
                  className="option"
                  key={i}
                  value={attribute.key}
                  style={{ borderRadius: "50%" }}
                >
                  {attribute.label}
                </option>
              ))}
            </select>
          </div>

          <div className="view">
            <p>View</p>
            <NavLink
              to="#"
              onClick={handleGridClick}
              className={({ isActive }) => (isGridActive ? "active" : "grid")}
            >
              <TfiLayoutGrid2Alt />
            </NavLink>
            <NavLink
              to="#"
              onClick={handleListClick}
              className={({ isActive }) => (!isGridActive ? "active" : "list")}
            >
              <TfiMenuAlt />
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #171717;
  .view-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 20px;
    padding-inline: 20px;
    border-bottom: 1px solid #222121;

    .search-result {
      h3 {
        font-size: 12px;
        font-weight: 400;
        span {
          color: #6ac045;
        }
      }
    }

    .view-dropdown {
      display: flex;
      align-items: center;
      gap: 30px;

      .genres-drop-down {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        p {
          font-size: 12px;
          color: #999;
        }
        .select {
          width: 140px;
          padding: 8px 12px 12px 5px;
          border-radius: 40px;
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

      .selection {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        p {
          font-weight: 250;
          font-size: 12px;
        }

        select {
          padding: 8px 12px 12px 5px;
          border-radius: 40px;

          &:focus {
            outline: none;
          }
        }

        .select {
          width: 140px;
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
        }
      }
      .view {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        p {
          font-weight: 250;
          font-size: 15px;
        }

        .grid,
        .list {
          font-size: 18px;
          margin-top: 5px;
          color: #c5c4c4;
          cursor: pointer;
        }

        .active {
          font-size: 18px;
          margin-top: 5px;
          color: #6ac045;
        }
      }
    }
  }
  /* ................This is the @media query part............... */
  @media (max-width: 768px) {
    background-color: #171717;
    .view-bar {
      flex-direction: column;
      gap: 40px;

      .view-dropdown {
        display: flex;
        justify-content: center;
      }
    }
  }

  /* ............This is the 560px @media query .............. */

  @media (max-width: 560px) {
    background-color: #171717;
    .view-dropdown {
      flex-direction: column-reverse;
    }
  }
`;
