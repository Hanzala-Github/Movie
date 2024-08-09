import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import {
  useGetSingleMoviesQuery,
  useGetSingleMovieWithImagesQuery,
  useGetSuggestionsMoviesQuery,
} from "../../redux/features/MovieApi";
import { SingleMovieCard } from "./SingleMovieCard";
import { FaHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { DownloadPop } from "./DownloadPop";
import { SingleMovieTrailer } from "./SingleMovieTrailer";
import { SummeryCast } from "../index";
import Skeleton from "react-loading-skeleton";

// .........This is the function component part........//
export function SingleMovie() {
  const [DownloadPopup, setDownloadPopup] = useState(false);

  const { id } = useParams();
  const singleMovieQuery = useGetSingleMoviesQuery(id);
  const suggestionQuery = useGetSuggestionsMoviesQuery(id);
  const singleMovieSummeryCast = singleMovieQuery?.data?.data?.movie;
  const singleMovieWithImages = useGetSingleMovieWithImagesQuery(id);

  const SingleMovieImageData = singleMovieWithImages.data?.data?.movie;

  const singleMovieTitle = SingleMovieImageData?.title;
  const singleMovieYear = SingleMovieImageData?.year;

  const SingleMovieData = singleMovieQuery.data?.data?.movie;

  const movieImg = SingleMovieData?.medium_cover_image;
  const Like = SingleMovieData?.like_count;
  const Rating = SingleMovieData?.rating;
  const Imdb = SingleMovieData?.imdb_code;

  const genres = SingleMovieData;

  const containerStyle = {
    backgroundImage: `url(${movieImg})`,
  };

  const currentImdbCode = SingleMovieData?.imdb_code;

  //   ..........This is the JSX return part..........//
  return (
    <Wrapper>
      <div className="background-image" style={containerStyle}></div>
      <CardWrapper>
        {DownloadPopup ? (
          <DownloadPop
            setDownloadPopup={setDownloadPopup}
            data={singleMovieQuery?.data}
          />
        ) : null}
        {/* Left */}
        <div className="left">
          {singleMovieQuery.isLoading ? (
            <Skeleton width={260} height={380} />
          ) : (
            <SingleMovieCard
              id={id}
              img={movieImg}
              width="260px"
              height="380px"
              like={Like}
              rating={Rating}
              imdb={Imdb}
            />
          )}

          <Link to="" style={{ textDecoration: "none" }}>
            <button className="btn1" onClick={() => setDownloadPopup(true)}>
              <span>
                <FiDownload style={{ fontSize: "20px", color: "#e7e7e7" }} />
              </span>
              Download
            </button>
          </Link>
          <Link
            to={`https://www.imdb.com/title/${currentImdbCode}/?ref_=hm_stp_pvs_piv_tt_i_2`}
            target="_"
            style={{ textDecoration: "none" }}
          >
            <button className="btn2">
              <span>
                {" "}
                <img
                  src="https://yts.mx/assets/images/website/logo-imdb.svg"
                  alt=""
                />
              </span>
              IMBD
            </button>
          </Link>
        </div>
        {/* Center */}
        <div className="center">
          <h2>
            {singleMovieWithImages.isLoading ? (
              <Skeleton width={400} height={40} />
            ) : (
              singleMovieTitle
            )}
          </h2>
          <p className="p1">
            {singleMovieWithImages.isLoading ? (
              <Skeleton width={500} height={27} count={4} />
            ) : (
              singleMovieYear
            )}{" "}
            {/* <br /> */}
            {genres?.genres.map((g, i) => (
              <span key={i} className="spanGenre">
                {g} /{" "}
              </span>
            ))}
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
              <p>
                {singleMovieWithImages.isLoading ? (
                  <Skeleton width={70} height={25} />
                ) : (
                  Like
                )}
              </p>
            </div>

            <div className="menu3">
              <img
                src="https://yts.mx/assets/images/website/rt-upright.svg"
                className="mIcom-3"
                style={{ width: "30px" }}
              />{" "}
              <p>
                {singleMovieWithImages.isLoading ? (
                  <Skeleton width={180} height={20} />
                ) : (
                  <>
                    {Rating}{" "}
                    <span>
                      AUDIENCE ·{" "}
                      <span style={{ color: "#13d41d" }}>5K ratings</span>
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="right">
          <p>Similar Movies</p>
          <div className="MovieCrads">
            {suggestionQuery.isLoading
              ? Array(4)
                  .fill()
                  .map((_, i) => <Skeleton key={i} width={110} height={140} />)
              : suggestionQuery?.data?.data?.movies?.map((movie, i) => (
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
      {/* This is the single Movie Trailer and summery ans top casts */}
      <SingleMovieTrailer id={id} />
      <SummeryCast
        summery={
          singleMovieQuery.isLoading ? (
            <Skeleton width={800} height={18} count={10} />
          ) : (
            singleMovieSummeryCast?.description_full
          )
        }
        uploadDate={singleMovieSummeryCast?.date_uploaded}
        castData={singleMovieSummeryCast?.cast}
      />
    </Wrapper>
  );
}

// ...............This is the styled-component part..........//
const Wrapper = styled.div`
  position: relative;
  height: min-content;
  margin-top: 86px;

  .background-image {
    position: absolute;
    background-color: red;
    top: 0%;
    left: 0%;
    width: 100%;
    height: calc(100vh - 59px);
    z-index: -1;
    background-color: #111;
    opacity: 0.1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const CardWrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-top: 50px;

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
      font-weight: 600;
      font-size: 17px;
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
      background-color: #cfb702;
      display: flex;
      justify-content: center;
      gap: 5px;
      align-items: center;
      font-size: 25px;

      img {
        width: 60px;
      }
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
    }

    .p1 {
      font-weight: 500;
      letter-spacing: -1px;
      font-size: 20px;
      .spanGenre {
        font-weight: 500;
        letter-spacing: -1px;
        font-size: 20px;
      }
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
      margin-left: 80px;
      font-size: 18px;
      font-weight: 550;
      letter-spacing: -0.8px;
    }

    .MovieCrads {
      width: 320px;
      gap: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  }

  /* ..........................This is the @media query part...................... */

  @media (max-width: 991px) {
    max-width: 900px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* center */
    .center {
      width: 80%;
      align-items: center;
      justify-content: center;
      margin-block: 20px;

      h2 {
        font-weight: 500;
      }

      .p1 {
        font-weight: 400;
      }
    }

    /* Right */
    .right {
      margin-block: 20px;

      p {
        padding-left: 20px;
      }

      .MovieCrads {
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 568px) {
    /* center */
    .center {
      align-items: flex-start;
      gap: 20px;

      h2 {
        font-weight: 400;
        font-size: 30px;
      }

      .p1 {
        font-weight: 300;
      }
    }

    /* Right */
    .right {
      .MovieCrads {
        flex-wrap: wrap;
      }
    }
  }
`;
