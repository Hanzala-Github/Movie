import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function MovieContainer() {
  gsap.registerPlugin(useGSAP);

  const h1ref = useRef();
  const pref = useRef();
  const starRef = useRef();

  useGSAP(() => {
    gsap.from([h1ref.current, pref.current, starRef.current], {
      y: "50px",
      opacity: 0,
      duration: 1,
    });
  }, []);

  const location = useLocation();

  const { data, isLoading } = useGetMoviesQuery(location.search);

  // ................This is the JSX return part.............//

  return (
    <Wrapper>
      <WrapperContainer>
        <div className="heading">
          <div className="h1" style={{ overflow: "hidden" }}>
            <h1 ref={h1ref}>Download YTS YIFY movies: HD smallest size</h1>
          </div>
          <div className="downloads" style={{ overflow: "hidden" }}>
            <span style={{ color: "#6AC045" }} ref={starRef}>
              <FaStar />
            </span>
            <div className="h3" style={{ overflow: "hidden" }}>
              <h3 ref={pref}>Popular Downloads</h3>
            </div>
          </div>
        </div>

        <div className="MovieCardWrapper">
          {isLoading
            ? Array(20)
                .fill()
                .map((_, i) => <Skeleton key={i} width={230} height={400} />)
            : data?.data?.movies?.map((card, i) => (
                <MovieCard
                  key={i}
                  id={card.id}
                  img={card.medium_cover_image}
                  title={card.title}
                  year={card.year}
                  genres={card.genres?.[0]}
                  genres2={card.genres?.[1]}
                  rating={card.rating}
                />
              ))}
        </div>
        <Pagination totalPages={3105} />
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

  @media (max-width: 991px) {
    max-width: 900px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  margin-top: 100px;

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
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #1a1919;

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

  /* ......This is the responsive part..... */

  @media (max-width: 768px) {
    .heading {
      h1 {
        font-size: 2rem;
        font-weight: 500;
        padding-inline: 25px;
        font-family: "Jost", sans-serif;
      }

      .downloads {
        span {
          font-size: 1rem;
        }

        h3 {
          font-weight: 300;
        }
      }
    }

    .MovieCardWrapper {
      margin-top: 20px;
      justify-content: space-around;
      margin-inline: 20px;
    }
  }
`;
