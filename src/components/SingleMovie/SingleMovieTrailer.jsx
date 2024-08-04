import React, { useState } from "react";
import styled from "styled-components";
import { useGetSingleMovieWithImagesQuery } from "../../redux/features/MovieApi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { TrailerPopup } from "./TrailerPopup";
import { TrailerImg } from "./TrailerImg";

export function SingleMovieTrailer({ id }) {
  const [trailer, setTrailer] = useState(false);
  const [selectedImgIndex, setSelectedImageIndex] = useState(null);

  const singleMovieWithImage = useGetSingleMovieWithImagesQuery(id);

  const SingleMoviewithImgData = singleMovieWithImage.data?.data?.movie;

  const firstImage = SingleMoviewithImgData?.medium_screenshot_image1 ?? "";
  const videoCode = SingleMoviewithImgData?.yt_trailer_code ?? "";

  const handleTrailerPop = () => {
    setTrailer(true);
  };

  const image1 = SingleMoviewithImgData?.large_screenshot_image2;
  const image2 = SingleMoviewithImgData?.large_screenshot_image3;

  const images = [image1, image2];

  return (
    <>
      <H2 className="trailerH2">Trailer</H2>
      <Wrapper>
        {trailer ? (
          <TrailerPopup setTrailer={setTrailer} videoCode={videoCode} />
        ) : null}
        {/* Trailer_img */}
        {images[selectedImgIndex] && (
          <TrailerImg
            src={images[selectedImgIndex]}
            // onNPClick={() => {
            //   if (selectedImgIndex === 0) {
            //     setSelectedImageIndex(
            //       Math.min(selectedImgIndex + 1, images.length - 1)
            //     );
            //   } else if (selectedImgIndex === 1) {
            //     setSelectedImageIndex(Math.max(selectedImgIndex - 1, 0));
            //   }
            // }}
            onNextClick={() => {
              setSelectedImageIndex(
                Math.min(selectedImgIndex + 1, images.length - 1)
              );
            }}
            onPrevClick={() => {
              setSelectedImageIndex(Math.max(selectedImgIndex - 1, 0));
            }}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}

        <div className="trailer">
          <div className="overlay" onClick={handleTrailerPop}>
            <IoPlayCircleOutline style={{ color: "#fff", fontSize: "100px" }} />
          </div>
          <img src={firstImage} />
        </div>

        {images.map((img, i) => (
          <div key={i} className="trailer" tabIndex={-1}>
            <img src={img} onClick={() => setSelectedImageIndex(i)} />
          </div>
        ))}
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
