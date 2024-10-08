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
  font-family: "Inter", sans-serif;
  z-index: 2;

  div {
    margin-left: 2em;
    gap: 20px;
  }

  @media (max-width: 980px) {
    top: 0;
    position: fixed;
    width: 100%;

    div {
      margin-left: 1em;
    }

    h1 {
      justify-self: center;
      font-size: 25px;
      margin-bottom: 0;
      padding-top: 2%;
    }
  }
`;

export const StyledSvg = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;
`;

export const AppContainer = styled.div`
  background-color: #fff8e5;
  width: 100%;
  height: 100%;
`;
export const Novidades = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }

  .texto {
    width: 50%;
    margin-left: 8%;
    margin-top: 2.5%;
    line-height: 35px;
  }

  img {
    width: 23%;
    border-radius: 10px;
    margin-right: 9%;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 980px) {
    padding-top: 5em;
    flex-direction: column;
    margin-left: 8%;
    margin-right: 9%;

    p {
      font-size: 15px;
    }

    h1 {
      font-size: 30px;
    }

    .texto {
      line-height: 20px;
      align-self: center;
      margin-left: 0;
      width: 90%;
    }

    img {
      align-self: center;
      width: 45%;
    }
  }
`;
export const Sobre = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  margin-left: 8%;
  margin-right: 9%;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }

  .texto {
    margin-top: 2.5%;
    line-height: 35px;
  }

  .imgs {
    display: flex;
    justify-content: space-between;
  }

  .Img1 {
    height: 42em;
    border-radius: 28px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  }

  .Img2 {
    height: 42em;
    border-radius: 28px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1400px) {
    .Img1 {
      height: 38em;
      border-radius: 25px;
    }

    .Img2 {
      height: 38em;
      border-radius: 25px;
    }
  }

  @media (max-width: 980px) {
    p {
      font-size: 15px;
    }

    h1 {
      font-size: 30px;
    }

    .texto {
      line-height: 20px;
      align-self: center;
      margin-left: 0;
      width: 90%;
    }
    .Img1 {
      width: 50%;
      height: auto;
    }

    .Img2 {
      width: 40%;
      height: auto;
    }
  }
`;

export const Produtos = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  margin-left: 8%;
  margin-right: 9%;

  p {
    font-size: 20px;
    font-weight: 600;
  }

  h1 {
    font-size: 40px;
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 30px;
    }
  }
`;
export const Contato = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  margin-left: 8%;
  margin-right: 9%;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
`;
