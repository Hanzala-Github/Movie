import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleCursor);

    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return <CursorDiv ref={cursorRef}></CursorDiv>;
}

const CursorDiv = styled.div`
  position: fixed;
  z-index: 10;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: left 0.2s linear, top 0.2s linear;
`;
