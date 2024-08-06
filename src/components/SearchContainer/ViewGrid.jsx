import React from "react";
import styled from "styled-components";
import { SearchCard } from "./SearchCard";
import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export function ViewGrid() {
  const location = useLocation();

  const { data, isLoading, isSuccess } = useGetMoviesQuery(location.search);

  return (
    <Wrapper>
      <div className="Middle-content">
        {isLoading ? (
          Array(20)
            .fill()
            .map((_, i) => <Skeleton width={212} height={330} key={i} />)
        ) : data?.data?.movies?.length ? (
          data.data.movies.map((dets, i) => (
            <SearchCard
              key={i}
              img={dets.medium_cover_image}
              title={dets.title}
              rating={dets.rating}
              genres={dets.genres?.[0] || "N/A"}
              id={dets.id}
            />
          ))
        ) : (
          <div>No movies to display</div>
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
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 560px) {
    .Middle-content {
      justify-content: space-around;
    }
  }
`;
