import React, { useRef, useState } from "react";
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

export function Header() {
  //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

  return (
    <Wrapper>
      <div className="menuWrapper">
        <Box
          bg="#222"
          color="white"
          // marginInline="auto"
          px={4}
          py={2}
          w={{ md: "200px", sm: "100px" }}
        >
          <Flex
            overflow={"hidden"}
            justify="space-between"
            paddingInline="15px"
            align="center"
            maxW="1200px"
            w="1200px"
            mx="auto"
            // backgroundColor="red"
            // paddingBlock="5px"
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
                to="/"
                _hover={{ textDecoration: "none", color: "gray.400" }}
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                Home
              </Link>
              <Link
                to="/search"
                className="link"
                _hover={{ textDecoration: "none", color: "gray.400" }}
                style={{
                  fontSize: "15px",
                  width: "130px",
                  textAlign: "center",
                }}
              >
                Browse Movies
              </Link>
              <InputGroup
                maxW="200px"
                position="relative"
                overflow="hidden"
                marginRight="40px"
              >
                <Input
                  onKeyDown={handleEnterSearch}
                  placeholder="Enter amount"
                  paddingBlock="15px"
                  width="100%"
                  color="#fff"
                  borderRadius="50px"
                  border="none"
                  backgroundColor="#282828"
                  _focus={{ outline: "none" }}
                  paddingLeft="10px"
                  fontSize="14px"
                />
                <InputRightElement
                  position="absolute"
                  top="23%"
                  right="0px"
                  background="#282828"
                  borderRadius="50%"
                >
                  <FaSearch
                    style={{
                      // color: "#333",
                      fontSize: "23px",
                      marginRight: "5px",
                      background: "#282828",
                      color: "#fff",
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </Flex>
        </Box>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0%;
  width: 100vw;
  background-color: #222;
  z-index: 30;
  .menuWrapper {
    max-width: 1200px;
    margin-inline: auto;
  }

  .link {
    text-decoration: none;
    font-size: 12px;
    color: #918e8e;
    margin-right: 1rem;
  }

  /* @media (max-width: 780px) {
    position: sticky;
    top: 0%;
    width: 100vw;
    background-color: #999;
    z-index: 30;
    display: flex;

    .menu {
      position: relative;
      display: flex;
      gap: 6px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      display: none;

      span {
        width: 25px;
        height: 2px;
        background-color: #fff;
        transition: all 0.3s ease;
      }

      .span-1 {
        background-color: #04f804;
      }

      .span-2 {
        background-color: #2596ff;
      }

      .span-3 {
        background-color: #ffe600;
      }

      &.open {
        .span-1 {
          transform: rotate(-45deg) translate(-6px, 5px);
        }
        .span-2 {
          opacity: 0;
        }
        .span-3 {
          transform: rotate(45deg) translate(-6px, -5px);
        }
      }
    }
  } */
`;
