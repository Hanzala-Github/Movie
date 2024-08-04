import React from "react";
import styled from "styled-components";
import { SearchCard } from "./SearchCard";
import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";

export function ViewGrid() {
  const location = useLocation();

  const { data, isLoading, isSuccess } = useGetMoviesQuery(location.search);

  return (
    <Wrapper>
      <div className="Middle-content">
        {isLoading ? (
          <Loader />
        ) : data?.data?.movies?.length ? (
          data.data.movies.map((dets, i) => (
            <SearchCard
              key={i}
              img={dets.medium_cover_image}
              title={dets.title}
              rating={dets.rating}
              genres={dets.genres?.[0] || "N/A"}
              genres2={dets.genres?.[1] || "N/A"}
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
`;
