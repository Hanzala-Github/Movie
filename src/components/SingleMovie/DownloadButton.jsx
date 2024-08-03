import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { textDecoration } from "@chakra-ui/react";

export function DownloadButton(props) {
  const { quality, size, url, video_codec } = props;

  return (
    <Button>
      <span className="span-1">{quality}</span>
      <p style={{ color: "#c7c6c6" }}>video_codec</p>
      <p>
        WEB.
        <span style={{ color: "green", fontSize: "14px" }}>{video_codec}</span>
      </p>
      <p style={{ color: "#c7c6c6" }}>File size</p>
      <p>{size}</p>
      <Link to={`${url}`} style={{ textDecoration: "none" }}>
        <button className="btn-1">
          {" "}
          <span>
            <FiDownload />
          </span>{" "}
          Download
        </button>
      </Link>
    </Button>
  );
}

const Button = styled.div`
  /* .pop-btn-1,
  .pop-btn-2,
  .pop-btn-3 { */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 260px;
  padding-inline: 10px;
  border-right: 1px solid #b3b3b3;

  p {
    font-weight: 600;
    color: #444;
  }

  .btn-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 5px;
    width: 130px;
    height: 40px;
    background-color: #75c74e;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    font-weight: 700;
  }

  .span-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    font-size: 30px;
    font-weight: 700;
    color: #c7c6c6;
    height: 60px;
    border: 3px solid #c7c6c6;
  }
`;
