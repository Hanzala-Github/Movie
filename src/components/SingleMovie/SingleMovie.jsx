import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  useGetSingleMoviesQuery,
  useGetSuggestionsMoviesQuery,
} from "../../redux/features/MovieApi";
import { SingleMovieCard } from "./SingleMovieCard";
import { FaHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { DownloadPop } from "./DownloadPop";

export function SingleMovie() {
  const [DownloadPopup, setDownloadPopup] = useState(false);

  const { id } = useParams();
  const singleMovieQuery = useGetSingleMoviesQuery(id);

  const suggestionQuery = useGetSuggestionsMoviesQuery(id);

  // console.log(singleMovieQuery.data?.data?.movie.torrents);

  // console.log(suggestionQuery.data?.data?.movies[1]?.id);
  const movieImg = singleMovieQuery.data?.data?.movie.medium_cover_image;
  const Like = singleMovieQuery.data?.data?.movie.like_count;
  const Rating = singleMovieQuery.data?.data?.movie.rating;
  const Imdb = singleMovieQuery.data?.data?.movie.imdb_code;

  //   ..........This is the JSX return part..........//
  return (
    <Wrapper>
      <CardWrapper>
        {DownloadPopup ? (
          <DownloadPop
            setDownloadPopup={setDownloadPopup}
            data={singleMovieQuery?.data}
          />
        ) : (
          ""
        )}
        {/* Real */}
        {/* {DownloadPopup ? (
          <DownloadPop
            DownloadPopup={DownloadPopup}
            setDownloadPopup={setDownloadPopup}
          />
        ) : (
          ""
        )} */}
        {/* Left */}
        <div className="left">
          <SingleMovieCard
            img={movieImg}
            width="260px"
            height="380px"
            like={Like}
            rating={Rating}
            imdb={Imdb}
          />
          <Link to="" style={{ textDecoration: "none" }}>
            <button className="btn1" onClick={() => setDownloadPopup(true)}>
              <span>
                <FiDownload />
              </span>
              Download
            </button>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <button className="btn2">Watch Now</button>
          </Link>
        </div>
        {/* Center */}
        <div className="center">
          <h2>Bad Boys: Ride or Die</h2>
          <p className="p1">
            2024 <br />
            Action / Adventure / Comedy / Crime / Thriller
          </p>
          <div className="MovieQualites">
            <span className="span1">Avalible in : </span>
            <span className="span2">720p.WEB</span>
            <span className="span3">1080p.WEB</span>
            <span className="span4">
              1080p.WEB.<span>x265</span>
            </span>
            <span className="span5">
              2160p.WEB.<span>x265</span>
            </span>
          </div>
          <p className="p2">WEB: same quality as BluRay</p>

          <div className="MenuIcons">
            <div className="menu1">
              <span>
                <FaHeart
                  className="mIcom-1"
                  style={{ fontSize: "28px", color: "green" }}
                />
              </span>{" "}
              <p>{Like}</p>
            </div>

            <div className="menu3">
              <img
                src="https://yts.mx/assets/images/website/rt-upright.svg"
                className="mIcom-3"
                style={{ width: "30px" }}
              />{" "}
              <p>
                {" "}
                {Rating}{" "}
                <span>
                  AUDIENCE ·{" "}
                  <span style={{ color: "#13d41d" }}>5K ratings</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="right">
          <p>Similar Movies</p>
          <div className="MovieCrads">
            {suggestionQuery?.data?.data?.movies?.map((movie, i) => (
              <SingleMovieCard
                key={i}
                img={movie.medium_cover_image}
                width="110px"
                height="140px"
                id={movie.id}
              />
            ))}
          </div>
        </div>
      </CardWrapper>
    </Wrapper>
  );
}

// ...............This is the styled-component part..........//
const Wrapper = styled.div`
  height: min-content;
  background-color: #111;
  padding-top: 50px;
`;
const CardWrapper = styled.div`
  /* width: 100vw; */
  max-width: 1200px;
  margin-inline: auto;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  gap: 15px;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    .btn1,
    .btn2 {
      border: none;
      width: 260px;
      height: 38px;
      border-radius: 3px;
      background-color: #6ac045;
      color: #fff;
      cursor: pointer;
    }

    .btn1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;

      span {
        font-size: 1rem;
      }
    }
    .btn2 {
      background-color: #0aad9e;
    }
  }

  /* center */
  .center {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      font-size: 40px;
      font-weight: 600;
      /* text-align: center; */
    }

    .p1 {
      font-weight: 500;
      letter-spacing: -1px;
      font-size: 20px;
    }
    .p2 {
      font-size: 15px;
      color: #969595;
      font-weight: 500;
      line-height: 0px;
    }

    .MovieQualites {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      .span1 {
        font-style: italic;
        font-size: 18px;
        font-weight: 150;
        letter-spacing: -1px;
      }

      .span2,
      .span3,
      .span4,
      .span5 {
        border: 0.3px solid #999494;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 5px;
        background-color: #3b3b3b42;
        border-radius: 2px;
      }

      .span4,
      .span5 {
        span {
          color: #01dd01;
        }
      }
    }

    .MenuIcons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 25px;

      .menu1,
      .menu3,
      .menu4 {
        display: flex;
        align-items: center;
        gap: 2rem;

        p {
          font-size: 20px;
          font-weight: 500;
        }
      }

      .menu3,
      .menu4 {
        span {
          font-size: 14px;
          font-weight: 200;
          color: #969595;
        }
      }
    }
  }

  /* Right */
  .right {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 10px;
      margin-left: 50px;
      font-size: 18px;
      font-weight: 550;
      letter-spacing: -0.8px;
    }

    .MovieCrads {
      width: 320px;
      gap: 15px;
      display: flex;
      flex-wrap: wrap;
      /* align-items: center; */
      justify-content: center;
    }
  }
`;
