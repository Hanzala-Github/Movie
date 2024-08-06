import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export function Header2() {
  // ...........This is the variables and functions part............//
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const span1ref = useRef();
  const span2ref = useRef();
  const span3ref = useRef();

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

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ............This is the JSX return part...........//
  return (
    <Navbar>
      <div className="navbar-wrapper">
        <div className="left">
          <Link to="/">
            <img
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="search movies"
            onKeyDown={handleEnterSearch}
            defaultValue={queries.query_term || ""}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="right">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/search">
            <h3>Browser Movies</h3>
          </Link>
        </div>
        <div
          className={`menu ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenu}
        >
          <span className="span-1" ref={span1ref}></span>
          <span className="span-2" ref={span2ref}></span>
          <span className="span-3" ref={span3ref}></span>
        </div>
      </div>
    </Navbar>
  );
}

// ............This is the styled-component part.............//
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .navbar-wrapper {
    max-width: 1000px;
    width: 100vw;
    padding: 15px;
    background-color: #111;
    box-shadow: rgba(51, 51, 51, 0.1) 0px 4px 12px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 2%;
    z-index: 30;

    .left {
      img {
      }
    }

    .search {
      position: relative;

      input {
        padding: 12px 35px;
        background-color: #222;
        border: none;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        border-radius: 5px;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #c4c2c2;
          /* text-align: center; */
        }
      }

      .search-icon {
        position: absolute;
        top: 23%;
        color: #fff;
        right: 10%;
        font-size: 20px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 35px;

      h3 {
        font-size: 15px;
        color: #999;
        font-weight: 400;
      }
    }

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
`;
