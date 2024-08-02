import React, { useState } from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt, TfiMenuAlt } from "react-icons/tfi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SORT_BY_FILTERS } from "../../constants/SortByFilters";
import queryString from "query-string";

export function SearchViewBar(props) {
  const { setShowView } = props;
  const [isGridActive, setIsGridActive] = useState(true);
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

  return (
    <Wrapper>
      <div className="view-bar">
        <div className="search-result">
          <h3>
            0 items found for <span>"searchData"</span>
          </h3>
        </div>
        <div className="view-dropdown">
          <div className="selection">
            <p>Sort By :</p>
            <select className="select" onChange={handleSortSelect}>
              {SORT_BY_FILTERS.map((attribute, i) => (
                <option className="option" key={i} value={attribute.key}>
                  {attribute.label}
                </option>
              ))}
            </select>
          </div>

          <div className="view">
            <p>View :</p>
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
        font-size: 15px;
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

      .selection {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        p {
          font-weight: 250;
          font-size: 15px;
        }

        select {
          padding: 10px 30px;
          border-radius: 40px;

          &:focus {
            outline: none;
          }
        }

        .select {
          .option {
            color: #444;
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
`;
