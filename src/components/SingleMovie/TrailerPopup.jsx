import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export function TrailerPopup({ setTrailer, videoCode }) {
  console.log(videoCode);
  return (
    <Wrapper onClick={() => setTrailer(false)}>
      <div className="TrailerPopup">
        <IoClose className="closeIcon" onClick={() => setTrailer(false)} />
        <iframe
          src={`https://www.youtube.com/embed/${videoCode}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
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
  background-color: #11111147;
  position: fixed;
  top: 0%;
  left: 0%;
  cursor: pointer;
  z-index: 20;
  .TrailerPopup {
    position: relative;
    width: 700px;
    height: 400px;

    .closeIcon {
      position: absolute;
      right: 0%;
      top: 0%;
      color: #999;
      font-size: 30px;

      &:hover {
        color: #fff;
      }
    }

    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
