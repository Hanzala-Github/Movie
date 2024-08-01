import queryString from "query-string";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { Loader } from "../Loader/Loader";
import { MovieCard } from "../MovieCard/MovieCard";
export function MovieContainer() {
  const location = useLocation();

  console.log({ location });
  const { data, isLoading, isSuccess, isError, error } = useGetMoviesQuery(
    location.search
  );
  const nav = useNavigate();

  const qs = queryString.parse(location.search);

  console.log(qs);

  const handleLeftSidePagination = () => {
    const newPage = Number(qs.page || 0);

    const newQs = { ...qs };

    newQs.page = Math.max(newPage - 1, 0);

    nav(`${location.pathname}?${queryString.stringify(newQs)}`);
  };
  const handleRightSidePagination = () => {
    const newPage = Number(qs.page || 1);
    nav(`${location.pathname}?page=${newPage + 1}`);
  };

  // .........This is the JSX return part............//
  return (
    <Wrapper>
      <WrapperContainer>
        <div className="pagination">
          <button className="btn1" onClick={handleLeftSidePagination}>
            <FaArrowLeft />
          </button>
          <button className="btn2" onClick={handleRightSidePagination}>
            <FaArrowRight />
          </button>
        </div>
        <div className="heading">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <div className="downloads">
            <span style={{ color: "#6AC045" }}>
              <FaStar />
            </span>
            <h3>Popular Downloads</h3>
          </div>
        </div>

        {isLoading && <Loader />}

        <div className="MovieCardWrapper">
          {data?.data?.movies?.map((card, i) => (
            <MovieCard
              key={i}
              id={card.id}
              img={card.medium_cover_image}
              title={card.title}
              year={card.year}
              rating={card.rating}
            />
          ))}
        </div>
      </WrapperContainer>
    </Wrapper>
  );
}

const WrapperContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.div`
  /* background-color: #444; */
  min-height: 100vh;
  position: relative;

  .pagination {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    padding-inline: 50px;
    width: 100vw;
    z-index: 20;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 600;
      padding: 20px;
      color: #fff;
      border-radius: 50%;
      border: none;
      background-color: #6ac045;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-top: 1.5rem;
    color: #fff;
    gap: 1rem;

    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }

    .downloads {
      width: 900px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #797979;

      span {
        font-size: 1.3rem;
      }

      h3 {
        font-weight: 500;
      }
    }
  }

  .MovieCardWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
    justify-content: center;
  }
`;
