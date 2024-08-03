import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";

export function SearchCard(props) {
  const { img, title, rating, genres, id } = props;

  const handlerating = (cardRating) => {
    const stars = [];

    const currentRating = (cardRating / 10) * 5;

    const isHalfRating = cardRating % 1 && cardRating !== 0;

    for (let i = 0; i < currentRating; i++) {
      stars.push(<FaStar key={i} className="rating" />);
    }
    if (isHalfRating) {
      stars.pop();
      stars.push(
        <FaStarHalfAlt key={Math.random() * 10000} className="rating" />
      );
    }

    return stars;
  };

  // ........This is the JSX return part.........//
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <div className="card-wrapper">
          <div className="overlay"></div>
          <Card className="card">
            <div className="card-img">
              <img src={img} alt="" />
            </div>
            <div className="card-text">
              <h4 style={{ color: "#999" }}>{title}</h4>
              <p>
                <FaStar className="rating" /> {handlerating(rating)}
              </p>
              <p>{genres}</p>
            </div>
          </Card>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
  .card-wrapper {
    position: relative;
    /* background-color: green; */

    .overlay {
      position: absolute;
      width: 212px;
      height: 330px;
      max-height: 340px;
      /* opacity: 0.3; */
      top: 0%;
      left: 0%;
      background-color: #00000068;
      /* background-color: #999; */
      z-index: 20;
    }
  }
`;
const Card = styled.div`
  width: 212px;
  height: 330px;
  max-height: 340px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 4px solid #fff;

  .card-img {
    width: 100%;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .card-text {
    padding-inline: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h4 {
      font-weight: 300;
      font-size: 15px;
      width: 65%;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .rating {
      color: #f3db06;
      margin-right: 5px;

      &:hover {
        color: green;
        transition: all 0.3s;
        scale: 1.3;
      }
    }
    p:nth-child(2) {
      color: #000;
      font-size: 13px;
    }
    p:nth-child(3) {
      color: green;
    }
  }

  /* &:hover {
    box-shadow: 1px 1px 5px #494848;
  } */
`;
