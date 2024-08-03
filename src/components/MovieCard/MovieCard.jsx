import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
export function MovieCard(props) {
  const { img, title, year, rating, id } = props;

  const SingleCardRating = (starRating) => {
    const stars = [];

    const currentPersentage = (starRating / 10) * 5;

    const isHalfStar = starRating % 1 && starRating !== 0;

    for (let i = 0; i < currentPersentage; i++) {
      stars.push(<FaStar key={i} className="rating" />);
    }

    if (isHalfStar) {
      stars.pop();
      stars.push(
        <FaStarHalfAlt className="rating" key={Math.random * 10000000} />
      );
    }
    return stars;
  };

  // ...........This is the JSX return part........//
  return (
    <Link style={{ textDecoration: "none" }} to={`/${id}`}>
      <Card className="maincard">
        <div className="cardImg">
          <img src={img} alt={title} />
        </div>
        <div className="cardText">
          <h3>{title}</h3>
          <p>{year}</p>
          <p>{SingleCardRating(rating)}</p>
        </div>
      </Card>
    </Link>
  );
}

const Card = styled.div`
  position: relative;
  width: 210px;
  overflow: hidden;
  color: #fff;
  cursor: pointer;

  .cardImg {
    height: 80%;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      border-radius: 0.2rem;
    }
  }

  .cardText {
    p {
      margin-block: 5px;
    }
    h3 {
      font-size: 1rem;
      font-weight: 500;
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
`;
