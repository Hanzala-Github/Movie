import React, { useState } from "react";
import styled from "styled-components";
import { useGetSingleMovieWithImagesQuery } from "../../redux/features/MovieApi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { TrailerPopup } from "./TrailerPopup";
import { TrailerImg } from "./TrailerImg";
import { TrailerPhoto } from "./TrailerPhoto";

export function SingleMovieTrailer({ id }) {
  const [trailer, setTrailer] = useState(false);
  const [trailerimg, setTrailerimg] = useState(false);
  const [trailerPhoto, setTrailerPhoto] = useState(false);

  const singleMovieWithImage = useGetSingleMovieWithImagesQuery(id);

  const SingleMoviewithImgData = singleMovieWithImage.data?.data?.movie;

  console.log();

  const firstImage = SingleMoviewithImgData?.medium_screenshot_image1 ?? "";
  const secondImage = SingleMoviewithImgData?.medium_screenshot_image2 ?? "";
  const thirdImage = SingleMoviewithImgData?.medium_screenshot_image3 ?? "";
  const videoCode = SingleMoviewithImgData?.yt_trailer_code ?? "";

  console.log(videoCode);

  const handleTrailerPop = () => {
    setTrailer(true);
  };

  //   .............This is the JSX return part.........//
  return (
    <>
      <H2 className="trailerH2">Trailer</H2>
      <Wrapper>
        {trailer ? (
          <TrailerPopup setTrailer={setTrailer} videoCode={videoCode} />
        ) : null}

        {/* Trailer_img */}

        {trailerimg ? <TrailerImg setTrailerimg={setTrailerimg} /> : null}

        {/* Trailer_photo */}

        {trailerPhoto ? (
          <TrailerPhoto setTrailerPhoto={setTrailerPhoto} />
        ) : null}

        <div className="trailer">
          <div className="overlay" onClick={handleTrailerPop}>
            <IoPlayCircleOutline style={{ color: "#fff", fontSize: "100px" }} />
          </div>
          <img src={firstImage} alt="" />
        </div>
        <div className="trailer" onClick={() => setTrailerimg(true)}>
          <img src={secondImage} alt="" />
        </div>
        <div className="trailer">
          <img src={thirdImage} alt="" onClick={() => setTrailerPhoto(true)} />
        </div>
      </Wrapper>
    </>
  );
}

// .........This is the styled-component part........//
const H2 = styled.div`
  color: #6ac045;
  text-align: center;
  padding-top: 40px;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
`;

const Wrapper = styled.div`
  padding-block: 50px;
  width: 100vw;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  .trailer {
    position: relative;
    width: 33%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
