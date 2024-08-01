import React from "react";
import { Box, Flex, HStack, Img, Input, InputGroup } from "@chakra-ui/react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// ...........this is the function component return part...........//

export function Header() {
  const navigate = useNavigate();
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();

      document.querySelector(".NavInput").focus();
    }
  });

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.querySelector(".NavInput").value = " ";
      navigate("/search");
    }
  };

  const handleSearchIcon = (e) => {
    e.preventDefault();
    navigate("/search");
    document.querySelector(".NavInput").value = " ";
    document.querySelector(".NavInput").focus();
  };

  // ............This is the JSX return part............//
  return (
    <Wrapper>
      <Box bg="#222" color="white" px={4} py={5}>
        <Flex
          justify="space-between"
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
              style={{ fontSize: "15px", width: "90px", textAlign: "center" }}
            >
              <span style={{ color: "#6ac045", fontSize: "15px" }}>4K</span>{" "}
              Trending
            </Link>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ fontSize: "15px", width: "120px", textAlign: "center" }}
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
              <Input
                onKeyDown={handleSearch}
                className="NavInput"
                type="text"
                placeholder="Search"
                borderRadius="50px"
                border="none"
                color="#6ac045"
                fontWeight="500"
                fontSize="16px"
                paddingLeft="5px"
                width="400px"
                height="45px"
                overflow="hidden"
                _focus={{ outline: "none" }}
              />
              <div className="search-Icon">
                <FaSearch
                  className="search"
                  onClick={handleSearchIcon}
                  color="gray.300"
                  style={{}}
                />
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

  .search-Icon {
    background-color: #fff;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0%;
    .search {
      font-size: 20px;
      color: #6ac045;
    }
  }
`;
