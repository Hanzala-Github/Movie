import React, { useEffect, useRef, useState } from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
export function MovieCard(props) {
  const { img, title, year, rating, id } = props;

  const [calculatedRating, setCalculatedRating] = useState(null);

  // ...........This is the JSX return part........//
  // console.log(id);
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/${id}`}
      onClick={() => {
        console.log(":clickchnwaidoiawhdoawdho");
      }}
    >
      <Card
        className="maincard"
        onClick={() => {
          console.log("main card event");
        }}
      >
        <div className="cardImg">
          <img src={img} alt={title} />
        </div>
        <div className="cardText">
          <h3>{title}</h3>
          <p>{year}</p>
          <p style={{ color: "##6AC045" }}>⭐{rating}</p>
        </div>

        <div className="buttonContainer">
          <button className="btn1">Download</button>
          <button className="btn2">Play</button>
        </div>
      </Card>
    </Link>
  );
}

const Card = styled.div`
  position: relative;
  width: 210px;
  /* height: 340px; */
  overflow: hidden;
  color: #fff;
  cursor: pointer;

  .cardImg {
    height: 80%;
    overflow: hidden;
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
    h3 {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .buttonContainer {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .btn1,
    .btn2 {
      padding: 0.6rem 2rem;
      background-color: red;
      color: #fff;
      border: none;
      opacity: 0.6;
      transition: all 0.2s ease;
    }
    .btn1 {
      transform: translateX(-150%);
    }
    .btn2 {
      transform: translateX(150%);
    }
  }
`;
