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

  div {
    margin-left: 2em;
    gap: 20px;
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
`;

export const Produtos = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  margin-left: 8%;
  margin-right: 9%;

  h1 {
    font-size: 40px;
  }
`
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

`
