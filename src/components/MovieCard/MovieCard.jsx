import React, { useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function MovieCard(props) {
  const { img, title, year, rating, id, genres, genres2 } = props;

  const SingleCardRating = (starRating) => {
    const stars = [];
    const currentPercentage = (starRating / 10) * 5;
    const isHalfStar = starRating % 1 && starRating !== 0;

    for (let i = 0; i < currentPercentage; i++) {
      stars.push(<FaStar key={i} className="rating" />);
    }

    if (isHalfStar) {
      stars.pop();
      stars.push(
        <FaStarHalfAlt className="rating" key={Math.random() * 10000000} />
      );
    }
    return stars;
  };

  // ...........This is the jsx return part.......//

  return (
    <Wrapper>
      <Link style={{ textDecoration: "none" }} to={`/${id}`}>
        <Card className="maincard">
          <div className="cardImg">
            <div className="overlay">
              <span className="icons">
                <FaStar
                  className="icon"
                  style={{ color: "#6AC045", fontSize: "28px" }}
                />
              </span>
              <span
                className="Rating"
                style={{ fontSize: "26px", fontWeight: "600", color: "#fff" }}
              >
                {rating}
              </span>
              <span
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                {genres} <br />
                {genres2}
              </span>
              <button className="btn1">View Detail</button>
            </div>
            {img ? (
              <img src={img} alt={title} />
            ) : (
              <Skeleton className="skeleton-img" />
            )}
          </div>
          <div className="cardText">
            <h3>{title}</h3>
            <p>{year}</p>
            <p className="ratings">
              {rating ? SingleCardRating(rating) : <Skeleton width={100} />}
            </p>
          </div>
        </Card>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Card = styled.div`
  position: relative;
  width: 215px;
  overflow: hidden;
  color: #fff;
  cursor: pointer;

  .cardImg {
    position: relative;
    height: 80%;
    overflow: hidden;
    border: 4px solid #fff;

    .overlay {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      max-height: 340px;
      top: 0%;
      left: 0%;
      background-color: #000000c7;
      border: 7px solid #6ac045;
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
      overflow: hidden;
      .btn1 {
        color: #fff;
        background: #6ac045;
        border: none;
        padding: 12px 30px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 400;
      }
    }

    &:hover .overlay {
      visibility: visible;
      opacity: 1;
      .btn1 {
        animation: fade_in 500ms ease-in-out;
      }
    }
    @keyframes fade_in {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      min-height: 310px;
      border-radius: 0.2rem;
    }
    .skeleton-img {
      width: 100%;
      height: 100%;
      background: #e0e0e0;
      border-radius: 0.2rem;
    }
  }

  .cardText {
    padding-inline: 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    p {
      margin-block: 5px;
      color: #999;
    }
    .ratings {
      display: flex;
    }
    h3 {
      padding-top: 5px;
      font-size: 15px;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .rating {
      color: yellow;
      margin-right: 5px;

      &:hover {
        color: green;
        transition: all 0.3s;
        scale: 1.3;
      }
    }
  }

  @media (max-width: 991px) {
    width: 180px;
  }
  @media (max-width: 768px) {
    width: 230px;
  }
  @media (max-width: 549px) {
    width: 300px;

    .cardImg {
      .overlay {
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
  }
`;
