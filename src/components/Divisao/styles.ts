import styled from "styled-components";

export const Divisa = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-right: 9%;
  margin-left: 8%;

  .xicara {
    width: 3%;
  }

  .linha {
    width: 27.5%;
  }

  @media(max-width: 980px){
    :nth-child(4){
      display: none;
    }

    :nth-child(5) {
      display: none;
    }

    .linha{
      width: 42%;
    }

    .xicara{
      width: 8%;
    }
  }
`;
