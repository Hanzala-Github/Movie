import React, { useState } from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt, TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export function SearchViewBar(props) {
  const { setShowView } = props;
  const [isGridActive, setIsGridActive] = useState(true);

  const handleGridClick = () => {
    setIsGridActive(true);
    setShowView(false);
  };

  const handleListClick = () => {
    setIsGridActive(false);
    setShowView(true);
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
            <select>
              <option className="option" value="PAK">
                Pakistan
              </option>
              <option className="option" value="IND">
                India
              </option>
              <option className="option" value="BNG">
                Bangladesh
              </option>
              <option className="option" value="UAE">
                Dubai
              </option>
              <option className="option" value="USA">
                America
              </option>
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
  .view-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 20px;
    padding-inline: 20px;
    border-bottom: 1px solid #d6d6d668;

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
          color: #000;
        }
      }
    }
  }
`;
