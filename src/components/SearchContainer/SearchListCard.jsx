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
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border: 4px solid #6ac045;
  /* &:hover {
  } */

  .card-img {
    /* width: 100%; */
    height: 245px;

    img {
      /* width: 100%; */
      width: 220px;
      /* height: 100%; */
      height: 245px;
      object-fit: cover;
      object-position: center;
    }
  }

  .card-text {
    padding-inline: 5px;
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
      width: 300px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      p {
        font-size: 19px;
        color: green;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      }
    }
  }
`;
