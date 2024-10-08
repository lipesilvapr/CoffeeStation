import {
  AppContainer,
  Contato,
  HeaderContainer,
  Novidades,
  Produtos,
  Sobre,
  StyledSvg,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import NavBar from "../../components/NavBar/NavBar";
import ImgNovidades from "../../assets/img/Projeto Do Menu De Cafeteria.jpg";
import Divisao from "../../components/Divisao/Divisao";
import Img1 from "../../assets/img/Original ideas for a coffee shop.jpg";
import Img2 from "../../assets/img/download.jpg";
import Menu from "../../components/Menu/Menu";
import Carrinho from "../../components/Carrinho/Carrinho";

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <div style={{ display: "flex" }}>
          <StyledSvg src={Logo} />
          <h1 style={{ color: "white" }}>Coffee Station</h1>
        </div>
        <NavBar />
      </HeaderContainer>
      <Carrinho/>
      <Novidades id="Novidades">
        <div className="texto">
          <h1>Novidades</h1>
          <p>Fique por dentro das nossas últimas novidades!</p>
          <p>
            Na Coffee Station, estamos sempre inovando para oferecer a melhor
            experiência aos nossos clientes. Confira nossas promoções especiais
            e eventos exclusivos! Não perca a chance de experimentar novos
            sabores e participar de nossas degustações. Siga-nos nas redes
            sociais e inscreva-se na nossa newsletter para receber atualizações
            fresquinhas diretamente no seu e-mail. Venha descobrir tudo o que
            preparamos para você!
          </p>
        </div>
        <img src={ImgNovidades} />
      </Novidades>
      <Divisao />
      <Sobre id="Sobre">
        <div className="texto">
          <h1>Sobre Nós</h1>
          <p>A sua estação de café favorita!</p>
          <p>
            Na Coffee Station, acreditamos que cada xícara conta uma história.
            Nossa missão é proporcionar momentos de prazer e aconchego em um
            ambiente acolhedor. Desde a seleção dos grãos até o preparo, nossa
            equipe é apaixonada pelo que faz. Utilizamos ingredientes de alta
            qualidade e métodos artesanais para garantir que cada café seja uma
            experiência única. Venha nos visitar e descubra o que torna a Coffee
            Station um lugar especial, onde o café é mais do que uma bebida; é
            uma verdadeira arte.
          </p>
        </div>
        <div className="imgs">
          <img src={Img1} className="Img1" />
          <img src={Img2} className="Img2" />
        </div>
      </Sobre>
      <Divisao />
      <Produtos id="Produtos">
        <h1>Produtos</h1>
        <p>Clique no produto desejado para adicionar ao carrinho</p>
        <Menu />
      </Produtos>
      <Divisao/>
      <Contato id="Contato">
        <h1>Contato</h1>
        <p>Estamos aqui para você!</p>
        <p>
          Tem alguma dúvida ou feedback? Adoramos ouvir nossos clientes! Entre
          em contato conosco: 
          <ul>
            <li>Endereço: Rua do Café, 123 - Centro </li>
            <li>Telefone: (11)
            1234-5678</li>
            <li>E-mail: contato@coffeestation.com.br</li>
          </ul>
            Siga-nos nas redes
          sociais para ficar por dentro das novidades e promoções! Estamos
          ansiosos para recebê-lo na Coffee Station!
        </p>
      </Contato>
    </AppContainer>
  );
}

export default App;
