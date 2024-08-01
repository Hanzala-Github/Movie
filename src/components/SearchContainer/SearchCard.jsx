import React from "react";
import styled from "styled-components";

export function SearchCard() {
  return (
    <Wrapper>
      <Card className="card">
        <div className="card-img">
          <img
            src="https://yts.mx/assets/images/movies/the_abandon_2022/medium-cover.jpg"
            alt=""
          />
        </div>
        <div className="card-text">
          <h4>Classic and this is the tasty biscut very nice this good</h4>
          <p>⭐4.5</p>
          <p>Horer</p>
        </div>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
`;
const Card = styled.div`
  width: 212px;

  .card-img {
    width: 100%;
    height: 260px;

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
    }
    p:nth-child(2) {
      color: #000;
      font-size: 13px;
    }
    p:nth-child(3) {
      color: green;
    }
  }

  &:hover {
    box-shadow: 2px 2px 5px #d8d7d7;
  }
`;
