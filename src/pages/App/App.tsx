import { HeaderContainer, Nav, StyledSvg } from "./styles";
import Logo from "../../assets/Logo.svg";

function App() {
  return (
    <>
      <HeaderContainer>
        <div style={{display: 'flex'}}>
          <StyledSvg src={Logo} />
          <h1 style={{color: 'white'}}>Coffe Station</h1>
        </div>
        <Nav>
          <ul>
            <li>Novidades</li>
            <li>Sobre</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </Nav>
      </HeaderContainer>
    </>
  );
}

export default App;
