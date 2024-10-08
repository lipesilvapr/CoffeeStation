import styled from "styled-components";

export const Bt = styled.div`
  width: 30%;
  text-align: center;
  height: 2em;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  p {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 0;
    margin: 0;
    justify-self: center;
  }

  @media(max-width: 1400px) {
    p{
      font-size: 14px;
    }
  }

  @media(max-width: 980px) {
    width: 45%;

    p{
      font-size: 15px;
    }
  }
`;
