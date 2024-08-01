import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchSideBar } from "./SearchSideBar";

import { SearchViewBar, ViewFlex, ViewGrid } from "../index";

export function SearchContainer() {
  // .......This is the functions and variables part.......//
  const [showView, setShowView] = useState(false);
  // .......This is the JSX return part...........//
  return (
    <Wrapper>
      <SearchContentWrapper>
        <div className="home-search">
          <Link to="/">
            <span className="span-1">Home</span> /
          </Link>
          <Link to="/">
            {" "}
            <span className="span-2">Search Result</span>
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
      </SearchContentWrapper>
    </Wrapper>
  );
}

// ........This is the styled-component part.........//
const Wrapper = styled.div`
  height: min-content;
  background-color: #fff;
`;

const SearchContentWrapper = styled.div`
  max-width: 1200px;
  background-color: #fff;
  margin: auto;

  .home-search {
    border-bottom: 1px solid #99999939;
    padding-block: 15px;
    padding-left: 5px;

    .span-1 {
      color: #555;
    }
    .span-2 {
      color: #6ac045;
    }
  }

  .container {
    display: flex;
    gap: 15px;
    background-color: #fff;

    .side-bar {
      flex: 1;
      box-shadow: 1px 0px 20px #99999939;
    }

    .middle-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 3;
    }
  }
`;
