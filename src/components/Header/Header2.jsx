import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchDropdown } from "./SearchDropdown";
import { useMediaQuery } from "@chakra-ui/react";

export function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMd] = useMediaQuery("(min-width: 768px)");

  const span1ref = useRef();
  const span2ref = useRef();
  const span3ref = useRef();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <div className="navbar-header">
        <div className="logo">
          <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="" />
        </div>
        <div
          className={`menu ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenu}
          style={{ color: "#fff" }}
        >
          <span className="span-1" ref={span1ref}></span>
          <span className="span-2" ref={span2ref}></span>
          <span className="span-3" ref={span3ref}></span>
        </div>
      </div>
      <div className={`navbar-wrapper ${isMenuOpen ? "open" : "close"}`}>
        <div className="start">
          {isMenuOpen || isMd ? (
            <>
              <SearchDropdown />
              <div
                className="links"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  whiteSpace: "nowrap",
                }}
              >
                <Link to="/" style={{ color: "#999" }}>
                  Home
                </Link>
                <Link to="/search" style={{ color: "#999" }}>
                  Browser Movies
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 30px;
  background-color: #222;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 40;

  .navbar-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

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
  }

  .navbar-wrapper {
    width: 100%;

    .start {
      /* overflow: hidden; */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 60px;

      .link {
        font-size: 15px;
        color: #999;
        font-weight: 400;
        white-space: nowrap;
      }
      .link2 {
        font-size: 15px;
        color: #999;
        font-weight: 400;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 7px 30px;

    .navbar-header .menu {
      display: flex;
    }

    .navbar-wrapper {
      .start {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 60px;
        transition: height 0.3s ease;
      }

      &.open .start {
        height: 40vh;
      }

      &.close .start {
        height: 0vh;
      }
      .links {
        flex-direction: column;
      }

      h3 {
        font-size: 15px;
        color: #999;
        font-weight: 400;
      }
    }
  }
`;
