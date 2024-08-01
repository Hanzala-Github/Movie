import React from "react";
import styled from "styled-components";
import { SearchListCard } from "./SearchListCard";

export function ViewFlex() {
  return (
    <Wrapper>
      <div className="Middle-content">
        <SearchListCard />
        <SearchListCard />
        <SearchListCard />
        <SearchListCard />
        <SearchListCard />
        <SearchListCard />
        <SearchListCard />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;

  .Middle-content {
    display: flex;
    padding: 10px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
`;
