import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGetSingleMoviesQuery } from "../../redux/features/MovieApi";
import { useParams } from "react-router-dom";

export function TrailerImg({ setTrailerimg }) {
  const { id } = useParams();
  const singleMoviedata = useGetSingleMoviesQuery(id);

  const ScreenShootImages = singleMoviedata.data?.data?.movie;

  const image1 = ScreenShootImages?.large_screenshot_image1;
  const image2 = ScreenShootImages?.large_screenshot_image2;
  const image3 = ScreenShootImages?.large_screenshot_image3;

  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  // ..............Handle the trailer screenShot pagination..............//
  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Wrapper onClick={() => setTrailerimg(false)}>
      <div className="TrailerImg">
        <div className="closeIcon">
          <FaChevronLeft className="icon2" onClick={handlePrevImage} />
          <FaChevronRight className="icon3" onClick={handleNextImage} />
          <IoClose
            className="icon1"
            onClick={() => {
              setTrailerimg(false);
            }}
          />
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Screenshot ${currentImageIndex + 1}`}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111111f6;
  position: fixed;
  top: 7%;
  left: 0%;
  cursor: pointer;
  z-index: 20;
  .TrailerImg {
    position: relative;
    width: 900px;
    height: 450px;

    .closeIcon {
      position: absolute;
      right: 0%;
      top: -8%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon1,
      .icon2,
      .icon3 {
        color: #999;
        font-size: 20px;

        &:hover {
          color: #fff;
        }
      }
      .icon1 {
        font-size: 30px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
