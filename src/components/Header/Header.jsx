import React from "react";
import {
  Box,
  Flex,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import queryString from "query-string";

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
            <InputGroup maxW="200px" position="relative" overflow="hidden">
              <Input
                onKeyDown={handleEnterSearch}
                defaultValue={queries.query_term || ""}
                placeholder="Enter amount"
                paddingBlock="15px"
                width="200px"
                borderRadius="50px"
                border="none"
                _focus={{ outline: "none" }}
                paddingLeft="10px"
                fontSize="14px"
              />
              <InputRightElement
                position="absolute"
                top="23%"
                right="0px"
                background="#fff"
                borderRadius="50%"
              >
                <FaSearch
                  color="green.500"
                  style={{
                    color: "#333",
                    fontSize: "23px",
                    marginRight: "5px",
                    background: "#fff",
                  }}
                />
              </InputRightElement>
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
`;
