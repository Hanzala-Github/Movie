import React from "react";
import { Box, Flex, Text, Button, HStack, Link, Img } from "@chakra-ui/react";
import styled from "styled-components";

export function Header() {
  return (
    <Wrapper>
      <Box bg="#222" color="white" px={4} py={5}>
        <Flex
          justify="space-between"
          align="center"
          maxW="1200px"
          mx="auto"
          paddingInline="3rem"
          paddingBlock="5px"
        >
          <Img
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            width="105px"
          ></Img>
          <HStack spacing={8}>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ textDecoration: "none", fontSize: "17px" }}
            >
              Home
            </Link>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ fontSize: "17px" }}
            >
              <span style={{ color: "#03b103" }}>4K</span> Trending
            </Link>
            <Link
              className="link"
              href="#"
              _hover={{ textDecoration: "none", color: "gray.400" }}
              style={{ fontSize: "17px" }}
            >
              Browse Movies
            </Link>
            {/* search */}
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
