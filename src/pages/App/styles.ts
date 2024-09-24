import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #d0854f;
  width: 100%;
  height: 5em;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin-left: 2em;
  }
`;

export const StyledSvg = styled.img`
  width: 70px;
  height: 70px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 4em;


  ul {
    display: flex;
    gap: 46px;
    list-style: none;
  }

  li {
    text-decoration: none;
    color: white;
    font-size: 24px;
  }
`;
