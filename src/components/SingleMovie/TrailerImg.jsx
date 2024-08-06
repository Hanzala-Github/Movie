import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function TrailerImg({ src, onNextClick, onPrevClick, onClose }) {
  return (
    <Wrapper>
      <div className="TrailerImg" tabIndex={-1}>
        <div className="closeIcon">
          <FaChevronLeft className="icon2" onClick={onPrevClick} />
          <FaChevronRight className="icon3" onClick={onNextClick} />
          <IoClose className="icon1" onClick={onClose} />
        </div>
        <img src={src} />
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
  user-select: none;
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
  @media (max-width: 991px) {
    .TrailerImg {
      width: 600px;
      height: 400px;
    }
  }
  @media (max-width: 634px) {
    .TrailerImg {
      width: 400px;
      height: 300px;
      padding-top: 9px;
    }
  }
  @media (max-width: 434px) {
    .TrailerImg {
      width: 300px;
      height: 230px;
      padding-top: 15px;
    }
  }
`;
