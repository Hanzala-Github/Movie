import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="top">
          <span className="span1">YTS © 2011</span>
          <span className="span2"> - 2024</span>
          <span className="span3"> - Blog</span>
          <span className="span4"> - DMCA</span>
          <span className="span5"> - API</span>
          <span className="span6"> - RSS</span>
          <span className="span7"> - Contact</span>
          <span className="span8"> - Browse Movies</span>
          <span className="span9"> - Requests</span>
          <span className="span10"> - Login</span>
          <span className="span11"> - Language</span>
        </div>

        <div className="center">
          <span className="span1">EZTV </span>
          <span className="span2"> - YIFY Status</span>
          <span className="span3"> - YTS Proxies</span>
          <span className="span4"> - YTS Proxies (TOR)</span>
          <span className="span5"> - Follow @ytsyify</span>
        </div>
        <div className="bottom">
          <p>
            <span>By using this site you agree to and accept our User</span>{" "}
            Agreement, <span>which can be read here</span>.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    padding-block: 30px;
    border-top: 1px solid #27272799;

    .top {
      span {
        font-size: 15px;
        font-weight: 300;
        color: #c4c4c499;
      }
      .span1 {
        color: #fff;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .center {
      span {
        font-size: 16px;
        color: #c4c4c499;
      }
    }
    .bottom {
      p {
        font-size: 12px;
        color: #c4c4c499;
        span {
          color: #fff;
        }
      }
    }
  }
`;
