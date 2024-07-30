import React from "react";
import styled from "styled-components";
import { useGetSingleMoviesQuery } from "../../redux/features/MovieApi";
import { useParams } from "react-router-dom";
import { color } from "framer-motion";

export function SummeryCast() {
  const { id } = useParams();
  const singleMoviedata = useGetSingleMoviesQuery(id);

  //   console.log(singleMoviedata.data?.data?.movie);

  const summery = singleMoviedata.data?.data?.movie?.description_full;
  const uploadDate = singleMoviedata.data?.data?.movie?.date_uploaded;
  const castData = singleMoviedata.data?.data?.movie?.cast;

  const DateObj = {
    uploadDate,
  };

  let NewDate = new Date();

  const finalDate = NewDate.toLocaleDateString(DateObj);

  console.log(NewDate);
  //   console.log(new Date(DateObj));

  // ...........This is the JSX return part.........//
  return (
    <Wrapper>
      <div className="SummeryCast">
        <div className="summeryUpload">
          <div className="summery">
            <h3 className="firstH3">Summery</h3>

            <p>{summery}</p>
          </div>
          <div className="upload">
            <h3 className="secondtH3">
              <i>Uploaded by : FREEMAN</i>
            </h3>
            <h4>{}</h4>
          </div>
        </div>

        <div className="casts">
          <h3 className="thirdtH3">Top cast</h3>
          {castData?.map((cast, i) => (
            <div className="cast" key={i}>
              <img src={cast.url_small_image} alt="" />{" "}
              <p>
                {cast.name}
                <span style={{ color: "#fff" }}>{cast.character_name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .SummeryCast {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding-bottom: 30px;

    .summeryUpload {
      /* height: 200px; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 50px;
      justify-content: space-between;

      .summery {
        display: flex;
        flex-direction: column;
        gap: 25px;
        .firstH3 {
          font-size: 25px;
          font-weight: 500;
        }

        p {
          width: 800px;
          font-weight: 300;
          color: #888;
          line-height: 25px;
        }
      }

      .upload {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .secondtH3,
        h4 {
          font-style: italic;
          font-size: 16px;
          color: #888;
          font-weight: 300;
          letter-spacing: -1px;
        }
      }
    }

    .casts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .thirdtH3 {
        font-size: 23px;
        font-weight: 450;
        padding-bottom: 20px;
      }

      .cast {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
        padding-bottom: 13px;
        border-bottom: 1px solid #222;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        p {
          font-weight: 400;
          color: #888;
          font-size: 14px;
          letter-spacing: -0.5px;
        }
      }
    }
  }
`;
