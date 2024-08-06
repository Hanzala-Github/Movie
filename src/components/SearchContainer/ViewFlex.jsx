import React from "react";
import styled from "styled-components";
import { SearchListCard } from "./SearchListCard";
import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export function ViewFlex() {
  const location = useLocation();

  const { data, isLoading, isSuccess } = useGetMoviesQuery(location.search);

  // .........This is the JSX return part...........//
  return (
    <Wrapper>
      <div className="Middle-content">
        {isLoading ? (
          <Skeleton width={861} height={273} />
        ) : (
          data?.data?.movies?.map((dets, i) => (
            <SearchListCard
              key={i}
              img={dets.medium_cover_image}
              title={dets.title}
              rating={dets.rating}
              genres={dets.genres?.[0]}
              id={dets.id}
              ptext={dets.slug}
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
