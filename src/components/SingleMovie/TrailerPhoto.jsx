// import React, { useState } from "react";
// import styled from "styled-components";
// import { IoClose } from "react-icons/io5";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import { useGetSingleMoviesQuery } from "../../redux/features/MovieApi";

// export function TrailerPhoto({ setTrailerPhoto }) {
//   const { id } = useParams();

//   const singleMovieData = useGetSingleMoviesQuery(id);

//   const [currentIndex, setcurrentIndex] = useState(2);

//   const screenShotsImages = singleMovieData.data?.data?.movie;

//   const image1 = screenShotsImages.large_screenshot_image1;
//   const image2 = screenShotsImages.large_screenshot_image2;
//   const image3 = screenShotsImages.large_screenshot_image3;

//   const images = [image1, image2, image3];

//   const handlePrevImage = (e) => {
//     e.stopPropagation();
//     setcurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const handleNextImage = (e) => {
//     e.stopPropagation();
//     setcurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   //   ...........This is the JSX return part ......//
//   return (
//     <Wrapper onClick={() => setTrailerPhoto(false)}>
//       <div className="TrailerPhoto">
//         <div className="closeIcon">
//           <FaChevronLeft className="icon2" onClick={handlePrevImage} />
//           <FaChevronRight className="icon3" onClick={handleNextImage} />
//           <IoClose
//             className="icon1"
//             onClick={() => {
//               setTrailerPhoto(false);
//             }}
//           />
//         </div>
//         <img src={images[currentIndex]} alt="" />
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #111111f6;
//   position: fixed;
//   top: 7%;
//   left: 0%;
//   cursor: pointer;
//   z-index: 20;
//   .TrailerPhoto {
//     position: relative;
//     width: 900px;
//     height: 450px;

//     .closeIcon {
//       position: absolute;
//       right: 0%;
//       top: -8%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       .icon1,
//       .icon2,
//       .icon3 {
//         color: #999;
//         font-size: 20px;

//         &:hover {
//           color: #fff;
//         }
//       }
//       .icon1 {
//         font-size: 30px;
//       }
//     }

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       object-position: center;
//     }
//   }
// `;
