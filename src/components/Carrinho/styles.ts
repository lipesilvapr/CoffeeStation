import styled from "styled-components";

export const MergeCart = styled.div`
  .backSelection {
    position: fixed;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    visibility: hidden;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease;
  }

  .on {
    opacity: 0.25;
    visibility: visible;
  }
`;

export const Fixed = styled.div`
  position: fixed;
  right: -18.5%;
  top: 15%;
  display: flex;
  z-index: 2;

  .geral {
    display: flex;
    position: relative;
    transition: transform 0.5s ease;
  }

  .car {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 80px;
    height: 58px;
    border-radius: 20px 0px 0px 20px;
    background: #ce7333;
    margin-top: 70px;
  }

  .slide-left {
    transform: translateX(-81.5%);
  }

  img {
    width: 50%;
    margin-left: 10%;
  }

  .infoCar {
    width: 350px;
    height: 700px;
    background: #fff8e5;

    p {
      margin: 0;
    }
  }

  .headCart {
    background: #ce7333;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
      color: white;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }
  }
`;
