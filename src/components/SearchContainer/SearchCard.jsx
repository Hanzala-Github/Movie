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
          <Card className="card">
            <div className="card-img">
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
                  {genres}
                </span>
                <Link to={`/${id}`}>
                  <button className="btn1">View Detail</button>
                </Link>
              </div>
              <img src={img} alt="" />
            </div>
            <div className="card-text">
              <h4 style={{ color: "#999" }}>{title}</h4>
              <p>
                <FaStar className="rating" /> {handlerating(rating)}
              </p>
              <p style={{ color: "#6AC045" }}>{genres}</p>
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
`;
const Card = styled.div`
  width: 200px;
  height: 320px;
  max-height: 340px;
  margin-bottom: 10px;
  cursor: pointer;

  .card-img {
    position: relative;
    width: 100%;
    height: 250px;
    border: 4px solid #fff;
    .overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 340px;
      top: 0%;
      left: 0%;
      background-color: #000000c7;
      border: 4px solid #6ac045;
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
        cursor: pointer;
      }
    }
    &:hover .overlay {
      visibility: visible;
      opacity: 1;
      .btn1 {
        animation: fade_in 500ms ease-in-out;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .card-text {
    padding-inline: 5px;
    padding-top: 5px;
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

  /* ............This is the @media query part.......... */

  @media (max-width: 991px) {
    width: 150px;
    height: 330px;
    .card-img {
      .overlay {
        .btn1 {
          padding: 8px 8px;
        }
      }
    }
  }
  @media (max-width: 560px) {
    width: 300px;
    height: 400px;
    .card-img {
      .overlay {
        .btn1 {
          padding: 8px 8px;
        }
      }
    }
  }
`;
