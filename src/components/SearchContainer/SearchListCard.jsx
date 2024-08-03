import React from "react";
import styled from "styled-components";

export function SearchListCard(props) {
  const { img, title, rating, genres, id } = props;

  return (
    <Wrapper>
      <Card className="card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-text">
          <div className="card-text-part-1">
            <h4>{title}</h4>
            <p>⭐{rating}</p>
            <p>
              Classic and this is the tasty biscut very nice this goodClassic
              and this is the tasty biscut very nice this goodClassic and this
              is the tasty biscut very nice this goodClassic and this is the
              tasty biscut very nice this goodClassic and this is the tasty
              biscut very nice this goodClassic and this is the tasty biscut
              very nice this goodClassic and this is the tasty biscut very nice
              this good Classic and this is the tasty biscut very nice this good
            </p>
          </div>
          <div className="card-text-part-2">
            <p>{genres}</p>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 4px solid #fff;

  .card-img {
    width: 100%;
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
      justify-content: space-around;
      h4 {
        font-weight: 300;
        font-size: 15px;
      }
      p:nth-child(2) {
        color: #000;
        font-size: 13px;
      }
      p:nth-child(3) {
        font-size: 13px;
        color: #666;
        font-weight: 200;
      }
    }

    .card-text-part-2 {
      p {
        font-size: 19px;
        color: green;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
      }
    }
  }
  /* &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  } */
`;
