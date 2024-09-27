import { Colecao, Shape } from "./styles";
import Espresso from "../../assets/img/Xícara realista de café preto na ilustração vetorial de pires _ Vetor Grátis 1.png";
import Cappuccino from "../../assets/img/Xícara de café Cappuccino com forma de coração Latte Art em fundo de madeira _ Foto Premium 1.png";
import Mocha from "../../assets/img/Cappuccino Brasileiro (com canela) 1.png";
import Aromatizado from "../../assets/img/Cappuccino Vanila _ Caramela 1.png";
import ChaPreto from "../../assets/img/image 1.png";
import ChaVerde from "../../assets/img/Green Tea - How & Why it is Beneficial for the Omad Diet 1.png";
import ChaGelado from "../../assets/img/Fantasy Island Iced Tea Cocktail Recipe 1.png";
import ChaMorango from "../../assets/img/Chá De Morango Refrescante Para Qualquer Ocasião 1.png";
import PaoDeQueijo from "../../assets/img/Pão de Queijo - brazilska peciva sa sirom - T and T kitchen and atelier 1.png";
import Croissant from "../../assets/img/download (1) 1.png";
import Bolo from "../../assets/img/download (2) 1.png";
import Torta from "../../assets/img/Torta de Limão sem Gelatina - Cook'n Enjoy 1.png";

interface Props {
  type: string;
}

const Produto: React.FC<Props> = ({ type }) => {
  if (type === "especiais") {
    return (
      <Colecao>
        <Shape>
          <h1>Espresso</h1>
          <p>Dose intensa e rica, perfeita para um sabor concentrado.</p>
          <img src={Espresso} />
          <h1 className="preco">R$ 8,00</h1>
        </Shape>
        <Shape>
          <h1>Cappuccino</h1>
          <p>Café expresso com leite cremoso e espuma leve.</p>
          <img src={Cappuccino} />
          <h1 className="preco">R$ 12,00</h1>
        </Shape>
        <Shape>
          <h1>Mocha</h1>
          <p>Mistura de café e chocolate, coberto com chantilly.</p>
          <img src={Mocha} />
          <h1 className="preco">R$ 14,00</h1>
        </Shape>
        <Shape>
          <h1>Café Aromatizado</h1>
          <p>Café suave com um toque doce.</p>
          <img src={Aromatizado} />
          <h1 className="preco">R$ 8,00</h1>
        </Shape>
      </Colecao>
    );
  } else if (type === "artesanais") {
    return (
      <Colecao>
        <Shape>
          <h1>Chá Preto</h1>
          <p>Sabor robusto e encorpado, ideal para qualquer hora.</p>
          <img src={ChaPreto} />
          <h1 className="preco">R$ 6,00</h1>
        </Shape>
        <Shape>
          <h1>Chá Verde</h1>
          <p>Leve e refrescante, cheio de antioxidantes.</p>
          <img src={ChaVerde} />
          <h1 className="preco">R$ 12,00</h1>
        </Shape>
        <Shape>
          <h1>Chá Gelado</h1>
          <p>Refrescante e perfeito para dias quentes.</p>
          <img className="ChaGelado" src={ChaGelado} />
          <h1 className="preco">R$ 14,00</h1>
        </Shape>
        <Shape>
          <h1>Chá de Frutas Vermelhas</h1>
          <p>Combinação frutada e deliciosa, ótima quente ou gelada.</p>
          <img className="Morango" src={ChaMorango} />
          <h1 className="preco">R$ 8,00</h1>
        </Shape>
      </Colecao>
    );
  } else if (type === "lanches") {
    return (
      <Colecao>
        <Shape>
          <h1>Pão de Queijo</h1>
          <p>Crocante por fora, macio e saboroso por dentro.</p>
          <img src={PaoDeQueijo} />
          <h1 className="preco">R$ 5,00</h1>
        </Shape>
        <Shape>
          <h1>Croissant</h1>
          <p>Massa folhada com recheio delicioso.</p>
          <img src={Croissant} />
          <h1 className="preco">R$ 9,00</h1>
        </Shape>
        <Shape>
          <h1>Bolo</h1>
          <p>Mistura de café e chocolate, coberto com chantilly.</p>
          <img className="Bolo" src={Bolo} />
          <h1 className="preco">R$ 10,00</h1>
        </Shape>
        <Shape>
          <h1>Torta de Limão</h1>
          <p>Deliciosa e azedinha, com massa crocante e creme leve.</p>
          <img src={Torta} />
          <h1 className="preco">R$ 10,00</h1>
        </Shape>
      </Colecao>
    );
  }
};

export default Produto;
