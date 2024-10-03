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
  right: -50%;
  top: 10%;
  display: flex;
  z-index: 2;

  .geral {
    display: flex;
    position: relative;
    transition: transform 0.5s ease;
  }

  .car {
    position: fixed;
    right: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 80px;
    height: 58px;
    border-radius: 20px 0px 0px 20px;
    background: #ce7333;
    margin-top: 70px;
    z-index: 3;
    transition: transform 0.5s ease;
  }

  .hide {
    display: none;
  }

  .slide-left {
    transform: translateX(-290%);
  }

  img {
    width: 50%;
    margin-left: 10%;
  }

  .infoCar {
    width: 350px;
    height: 700px;
    background: #fff8e5;
    padding: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .lista {
      max-height: 700px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: #ce7333 transparent;
    }

    .vazio {
      font-size: 20px;
      font-weight: bold;
      margin-left: 30%;
    }

    .bts {
      display: flex;
      justify-content: space-between;
    }

    .textTotal {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 25px;
        font-family: "Montserrat", sans-serif;
      }

      .precoTotal {
        text-align: end;
      }
    }

    .item {
      display: flex;
      width: 99%;
      border: 1px solid black;
      height: 60px;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-bottom: 8%;

      .primeiraParte {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .imgGelado {
        width: 20px;
        margin-left: 5%;
        padding-left: 0;
        padding-bottom: 5%;
      }

      .itemImg {
        width: 45px;
        margin-left: 0;
        padding-top: 0;
      }

      img {
        width: 30%;
        padding-top: 5%;
      }
    }

    p {
      width: 100%;
    }
  }

  .headCart {
    background: #ce7333;
    height: 70px;
    width: 108.2%;
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

  @media (max-width: 980px) {
    right: -100%;
    top: 20%;

    .infoCar {
      width: 200px;
      height: 500px;
    }

    .headCart {
      width: 108.2%;
    }

    .slide-left {
      transform: translateX(-250%);
    }

    .textTotal {
      p{
        font-size: 14px;
      }
    }

    .headCart{
      h1{
        font-size: 25px;
      }
    }
  }
`;
