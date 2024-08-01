import React from "react";
import styled from "styled-components";
import { SearchCard } from "./SearchCard";

export function ViewGrid() {
  return (
    <Wrapper>
      <div className="Middle-content">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;

  .Middle-content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
`;
