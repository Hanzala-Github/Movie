import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function SearchListCard(props) {
  const { img, title, rating, genres, id, ptext } = props;

  const starsRatings = (starRating) => {
    const stars = [];
    const currentRating = (starRating / 10) * 5;
    const isHalfStar = starRating % 1 && starRating !== 0;

    for (let i = 0; i < currentRating; i++) {
      stars.push(<FaStar key={i} className="rating" />);
    }
    if (isHalfStar) {
      stars.pop();
      stars.push(
        <FaStarHalfAlt key={Math.random() * 10000} className="rating" />
      );
    }

    return stars;
  };

  // ...........This is the JSX return part.............//

  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <Card className="card">
          <div className="card-img">
            <img src={img} alt="" />
          </div>
          <div className="card-text">
            <div className="card-text-part-1">
              <h4>{title}</h4>
              <p>{starsRatings(rating)}</p>
              <p>{ptext}</p>
            </div>
            <div className="card-text-part-2">
              <p style={{ color: "#6AC045" }}>{genres}</p>
            </div>
          </div>
        </Card>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
  width: 100%;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 10px;
  border: 1px solid #283a20;

  .card-img {
    width: 220px;
    height: 255px;
    width: 35%;
    background-color: #222;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .card-text {
    width: 50%;
    /* background: red; */
    padding-inline: 20px;
    display: flex;
    justify-content: space-between;
    gap: 5px;

    .card-text-part-1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 5px;
      gap: 15px;
      h4 {
        font-weight: 300;
        font-size: 20px;
        color: #fff;
      }
      p:nth-child(2) {
        color: #000;
        font-size: 18px;
      }
      p:nth-child(3) {
        font-size: 16px;
        color: #999;
        font-weight: 200;
        width: 300px;
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
    }

    .card-text-part-2 {
      /* width: 20vw; */
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      p {
        font-size: 19px;
        color: green;
      }
    }
  }

  @media (max-width: 768px) {
    .card-img {
      width: 37%;
    }

    .card-text {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    .card-img {
      width: 220px;
      height: 255px;
    }

    .card-text {
      width: 40%;
      padding-inline: 10px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;

      .card-text-part-1 {
        width: 100%;
        padding-top: 0px;
        gap: 5px;
        p:nth-child(3) {
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 478px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .card-img {
      width: 350px;
      height: 255px;
    }

    .card-text {
      width: 100%;
      padding-top: 10px;

      .card-text-part-1 {
        padding-top: 0px;
        gap: 5px;
      }
    }
  }
`;
