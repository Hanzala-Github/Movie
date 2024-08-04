import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchSideBar } from "./SearchSideBar";

import { SearchViewBar, ViewFlex, ViewGrid } from "../index";
import { Pagination } from "../Pagination/Pagination";

export function SearchContainer() {
  // .......This is the functions and variables part.......//
  const [showView, setShowView] = useState(false);
  // .......This is the JSX return part...........//
  return (
    <Wrapper>
      <SearchContentWrapper>
        <div className="home-search">
          <Link to="/">
            <span className="span-1">Home /</span>
          </Link>
          <Link to="/">
            {" "}
            <span className="span-2"> Search Result</span>
          </Link>
        </div>
        {/* Main__Container */}

        <div className="container">
          <div className="side-bar">
            <SearchSideBar />
          </div>
          <div className="middle-content">
            <SearchViewBar setShowView={setShowView} />
            {showView ? <ViewFlex /> : <ViewGrid />}
          </div>
        </div>
        <Pagination totalPages={3105} />
      </SearchContentWrapper>
    </Wrapper>
  );
}

// ........This is the styled-component part.........//
const Wrapper = styled.div`
  height: min-content;
  background-color: #111111;
  color: #999;
`;

const SearchContentWrapper = styled.div`
  max-width: 1200px;
  background-color: #111111;
  margin: auto;

  .home-search {
    border-bottom: 1px solid #222121;
    padding-block: 15px;
    padding-left: 5px;

    .span-1 {
      color: #999;
    }
    .span-2 {
      color: #6ac045;
    }
  }

  .container {
    display: flex;
    gap: 15px;
    background-color: #171717;

    .side-bar {
      flex: 1;
      border: 1px solid #222121;
      background-color: #222;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      border-radius: 10px;
      padding: 5px;
    }

    .middle-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 3;
    }
  }
`;
