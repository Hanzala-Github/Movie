import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { DownloadButton } from "../index";
export function DownloadPop(props) {
  const { setDownloadPopup, data } = props;

  return (
    <PopCardWrapper onClick={() => setDownloadPopup(false)}>
      <Popup>
        <IoClose
          className="closeIcon"
          style={{ color: "#000" }}
          onClick={() => setDownloadPopup(false)}
        />
        <h2>Select movie quality</h2>
        <div className="pop_btn_Container">
          {data?.data?.movie?.torrents?.map((link, i) => (
            <DownloadButton
              key={i}
              quality={link.quality}
              size={link.size}
              url={link.url}
              video_codec={link.video_codec}
            />
          ))}
        </div>
      </Popup>
    </PopCardWrapper>
  );
}

// .............This is the styled-component part...........//

const PopCardWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh;
  width: 100%;
  background-color: #99999940;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  z-index: 17;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Popup = styled.div`
  width: 600px;
  position: fixed;
  top: 10%;
  transform: translateY(0%);
  padding-block: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  .closeIcon {
    position: absolute;
    top: 0%;
    right: 6px;
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  h2 {
    font-size: 19px;
    color: #75c74e;
    font-weight: 550;
    margin-bottom: 35px;
  }

  .pop_btn_Container {
    height: 100%;
    display: flex;
    padding-inline: 5px;
    gap: 25px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
