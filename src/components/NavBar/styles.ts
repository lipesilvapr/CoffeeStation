import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 4%;

  ul {
    display: flex;
    gap: 46px;
    list-style: none;
  }

  li {
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }

  .nostyle {
    color: inherit;
    text-decoration: none;
  }
`;
