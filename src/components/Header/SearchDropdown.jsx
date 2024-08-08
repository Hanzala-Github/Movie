import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useGetMoviesQuery } from "../../redux/features/MovieApi";
import debounce from "lodash.debounce";
import { Spinner } from "@chakra-ui/react";

export function SearchDropdown() {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetMoviesQuery(
    `?query_term=${search}&limit=${5}`
  );

  const navigate = useNavigate();
  const location = useLocation();
  const queries = queryString.parse(location.search);

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newQuery = { ...queries };
      newQuery.query_term = e.target.value;
      newQuery.page = 1;
      navigate(`/search?${queryString.stringify(newQuery)}`);
    }
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocused(false);
    }
  };

  const handleSearch = useCallback((e) => {
    setSearch(e.target?.value);
  }, []);

  const handleDebounceSerch = debounce(handleSearch, 1000);

  const handleListClick = () => {
    setFocused(false);
  };

  // ............This is the JSXv return part.......//
  return (
    <Search onFocus={() => setFocused(true)} onBlur={(e) => handleBlur(e)}>
      <SearchBar>
        <input
          onChange={handleDebounceSerch}
          type="text"
          placeholder="search movies"
          onKeyDown={handleEnterSearch}
          defaultValue={queries.query_term || ""}
        />
        {isFetching && (
          <StyledLoaderWrapper>
            <StyledLoader color="green" height={20} width={20} style={{}} />
          </StyledLoaderWrapper>
        )}
        <FaSearch className="serachBar-icon" />
      </SearchBar>

      {search.length
        ? focused &&
          data && (
            <Dropdown>
              {data?.data?.movies?.map((movie, i) => (
                <Link to={`${movie.id}`} key={i} onClick={handleListClick}>
                  <List key={i}>
                    <div className="list-img">
                      <img
                        src={movie.medium_cover_image}
                        key={movie.medium_cover_image || i}
                      />
                    </div>
                    <div className="list-Text">
                      <h3>{movie.title}</h3>
                      <p>{movie.year}</p>
                    </div>
                  </List>
                </Link>
              ))}
            </Dropdown>
          )
        : null}
    </Search>
  );
}

const Search = styled.div`
  position: relative;
  width: 280px;
  cursor: pointer;
  max-width: 400px;

  /* z-index: 30; */

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLoader = styled(Spinner)({});

const StyledLoaderWrapper = styled.div({
  position: "absolute",
  top: 0,
  right: 39,
  alignItems: "center",
  height: "100%",
  display: "flex",
  justifyContent: "center",
});
const SearchBar = styled.div`
  position: relative;

  input {
    width: 100%;
    /* width: 200px; */
    height: 50px;
    background-color: #222;
    border: 1px solid #333;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    padding-left: 10px;

    &:focus {
      outline: none;
    }
  }

  .serachBar-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #fff;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;

    input {
      width: 100%;
      height: 50px;
      background-color: #222;
      border: 1px solid #333;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      border-radius: 5px;
      padding-left: 10px;

      &:focus {
        outline: none;
      }
    }

    .serachBar-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #1d1d1d;
  border: 1px solid #333;
  border-radius: 0 0 5px 5px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    background-color: #222;
  }
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7px;
  border-bottom: 1px solid #38373756;
  color: #fff;
  &:hover {
    background-color: #444;
  }

  &:last-child {
    border-bottom: none;
  }

  .list-img {
    width: 50px;
    min-width: 50px;
    min-height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .list-Text {
    margin-left: 16px;

    h3 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 5px;
    }

    p {
      color: #cecdcd;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: 1px 1px 2px #73ff0030;
  }
`;
