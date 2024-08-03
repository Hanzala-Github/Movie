import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function SingleMovieCard(props) {
  const { img, width, height, id } = props;

  return (
    <Link to={`/${id}`}>
      <Card style={{ width: `${width}`, height: `${height}` }}>
        <img
          src={img}
          alt=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Card>
    </Link>
  );
}

const Card = styled.div`
  width: 210px;
  height: 300px;
  border-radius: 0.3rem;
  overflow: hidden;

  &:hover {
    img {
      scale: 1.2;
      transition: all 1.5s;
    }
  }
  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
