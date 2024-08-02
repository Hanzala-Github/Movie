import React from "react";
import { Box, Flex, HStack, Img, Input, InputGroup } from "@chakra-ui/react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import queryString from "query-string";
// import { useGetMoviesQuery } from "../../redux/features/MovieApi";

// ...........this is the function component return part...........//

export function Header() {
  const navigate = useNavigate();

  const location = useLocation();
  const queries = queryString.parse(location.search);

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newQuery = { ...queries };

      newQuery.query_term = e.target.value;

      navigate(`/search?${queryString.stringify(newQuery)}`);
    }
  };
  // .........Search movies getting part.......//
  // const { data, isLoading, isSuccess } = useGetMoviesQuery(queries.search);

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();

      document.querySelector(".NavInput").focus();
    }
  });

  // ............This is the JSX return part............//
  return (
    <Wrapper>
      <Box bg="#222" color="white" px={4} py={5}>
        <Flex
          justify="space-between"
          paddingInline="15px"
          align="center"
          maxW="1200px"
          mx="auto"
          paddingBlock="5px"
        >
          <Link to="/">
            <Img
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              width="105px"
            />
          </Link>
          <HStack spacing={8}>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Home
            </Link>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ fontSize: "15px", width: "100px", textAlign: "center" }}
            >
              <span style={{ color: "#6ac045", fontSize: "15px" }}>4K</span>{" "}
              Trending
            </Link>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ fontSize: "15px", width: "130px", textAlign: "center" }}
            >
              Browse Movies
            </Link>
            <InputGroup
              maxW="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <div className="inputWrapper">
                <Input
                  onKeyDown={handleEnterSearch}
                  defaultValue={queries.query_term || ""}
                  className="NavInput"
                  type="text"
                  placeholder="Search"
                  borderRadius="50px"
                  border="none"
                  color="#555"
                  fontWeight="500"
                  fontSize="16px"
                  paddingLeft="5px"
                  // width="170px"
                  // height="45px"
                  width="100%"
                  height="45px"
                  overflow="hidden"
                  _focus={{ outline: "none" }}
                />
                <div className="search-Icon">
                  <FaSearch className="search" color="gray.300" style={{}} />
                </div>
              </div>
            </InputGroup>
          </HStack>
        </Flex>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0%;
  width: 100vw;
  background-color: #999;
  z-index: 30;
  .link {
    text-decoration: none;
    font-size: 12px;
    color: #918e8e;
    margin-right: 1rem;
  }

  .inputWrapper {
    position: relative;
    overflow: hidden;
    .search-Icon {
      background-color: #fff;
      border-radius: 50px;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
      right: 0%;
      top: 0%;
      transform: translate(-0%, 25%);
      .search {
        font-size: 20px;
        color: #6ac045;
      }
    }
  }
`;
