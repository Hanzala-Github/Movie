import React from "react";
import styled from "styled-components";
import { SearchListCard } from "./SearchListCard";
import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { Loader } from "../Loader/Loader";

export function ViewFlex() {
  const { data, isLoading, isSuccess } = useGetMoviesQuery();

  return (
    <Wrapper>
      <div className="Middle-content">
        {isLoading ? (
          <Loader />
        ) : (
          data?.data?.movies?.map((dets, i) => (
            <SearchListCard
              key={i}
              img={dets.medium_cover_image}
              title={dets.title}
              rating={dets.rating}
              genres={dets.genres[0]}
              id={dets.id}
            />
          ))
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
  background-color: #171717;
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
