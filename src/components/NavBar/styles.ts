import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 20px 20px 20px 20px;
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

  .burger {
    display: none;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 50px;
    height: 8px;
    margin: 8px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #ffffff;
  }

  @media (max-width: 980px) {

    .burger {
      display: block;
    }

    .burger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .burger.active .bar:nth-child(1) {
      transform: translateY(16px) rotate(45deg);
    }

    .burger.active .bar:nth-child(3) {
      transform: translateY(-16px) rotate(-45deg);
    }

    .nav-menu {
      position: fixed;
      top: 3.5em;
      right: 10%;
      gap: 0;
      flex-direction: column;
      background-color: #363535;
      width: 30%;
      text-align: center;
      align-items: center;
      transition: opacity 0.4s ease;
      font-size: 26px;
      opacity: 0;
      visibility: hidden;
    }

    .nav-item {
      margin: 16px 0;
    }

    .nav-menu.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
