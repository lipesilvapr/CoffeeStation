import styled from "styled-components";

export const Colecao = styled.div`
  margin-left: 2%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
  }

  div {
    width: 80%;
    align-self: center;
  }

  .localBtn {
    width: 80%;
    height: 3em;
    display: flex;
    justify-content: center;
  }
`;

export const Shape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  background-color: #e7d0b0;
  height: 29em;
  border-radius: 22px;
  border: 3px solid #454342;
  font-family: "Pacifico", sans-serif;
  margin-bottom: 1em;

  h1 {
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 1%;
  }

  p {
    font-size: 18px;
    margin-bottom: 0;
    width: 80%;
  }

  img {
    width: 90%;
  }

  .preco {
    margin-top: 0;
  }

  .ChaGelado {
    width: 45%;
    margin-left: 5%;
  }

  .Morango {
    width: 70%;
  }

  .Bolo {
    width: 70%;
  }

  @media (max-width: 1400px) {
    height: 25em;

    h1{
      font-size: 28px;
    }

    p{
      font-size: 16px;
    }
  }

  @media (max-width: 980px) {
    width: 70%;
    height: auto;
    align-self: center;
    margin-bottom: 0.5em;

    h1 {
      font-size: 20px;
    }

    img {
      width: 70%;
    }

    p {
      font-size: 14px;
    }

    .Morango {
      width: 60%;
    }
    .Bolo {
      width: 60%;
    }
    .ChaGelado {
      width: 40%;
    }
  }
`;

export const Btn = styled.button`
  background-color: #e7d0b0;
  border: none;
  border-radius: 8px;
  font-family: "Pacifico", sans-serif;
  font-size: 16px;
  width: 80%;
  border: 3px solid #454342;
  cursor: pointer;
  margin-bottom: 1em;

  &:hover {
    background-color: #c9a471;
    transform: scale(1.02);
    transition: all 0.3s ease;
  }

  @media (max-width: 1400px) {
    width: 95%;
    height: 3em;
  }

  @media (max-width: 980px) {
    font-size: 14px;
  }
`;
