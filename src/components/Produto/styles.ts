import styled from "styled-components";

export const Colecao = styled.div`
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
`;

export const Shape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 20%;
  background-color: #e7d0b0;
  height: 29em;
  border-radius: 22px;
  border: 3px solid #454342;
  font-family: "Pacifico", sans-serif;

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

  .Bolo{
    width: 70%;
  }
`;
