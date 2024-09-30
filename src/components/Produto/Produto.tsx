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

import { useCart } from '../../context/CarrinhoContext'; 

interface Props {
  type: string;
}

const Produto: React.FC<Props> = ({ type }) => {
  const { addToCart } = useCart(); 

  const produtosEspeciais = [
    { id: 'espresso', name: 'Espresso', description: 'Dose intensa e rica, perfeita para um sabor concentrado.', price: 8.00, img: Espresso },
    { id: 'cappuccino', name: 'Cappuccino', description: 'Café expresso com leite cremoso e espuma leve.', price: 12.00, img: Cappuccino },
    { id: 'mocha', name: 'Mocha', description: 'Mistura de café e chocolate, coberto com chantilly.', price: 14.00, img: Mocha },
    { id: 'aromatizado', name: 'Café Aromatizado', description: 'Café suave com um toque doce.', price: 8.00, img: Aromatizado },
  ];

  const produtosArtesanais = [
    { id: 'cha_preto', name: 'Chá Preto', description: 'Sabor robusto e encorpado, ideal para qualquer hora.', price: 6.00, img: ChaPreto },
    { id: 'cha_verde', name: 'Chá Verde', description: 'Leve e refrescante, cheio de antioxidantes.', price: 12.00, img: ChaVerde },
    { id: 'cha_gelado', name: 'Chá Gelado', description: 'Refrescante e perfeito para dias quentes.', price: 14.00, img: ChaGelado },
    { id: 'cha_morango', name: 'Chá de Frutas Vermelhas', description: 'Combinação frutada e deliciosa, ótima quente ou gelada.', price: 8.00, img: ChaMorango },
  ];

  const produtosLanches = [
    { id: 'pao_de_queijo', name: 'Pão de Queijo', description: 'Crocante por fora, macio e saboroso por dentro.', price: 5.00, img: PaoDeQueijo },
    { id: 'croissant', name: 'Croissant', description: 'Massa folhada com recheio delicioso.', price: 9.00, img: Croissant },
    { id: 'bolo', name: 'Bolo', description: 'Mistura de café e chocolate, coberto com chantilly.', price: 10.00, img: Bolo },
    { id: 'torta', name: 'Torta de Limão', description: 'Deliciosa e azedinha, com massa crocante e creme leve.', price: 10.00, img: Torta },
  ];

  const produtos = type === "especiais" ? produtosEspeciais : type === "artesanais" ? produtosArtesanais : produtosLanches;

  return (
    <Colecao>
      {produtos.map(produto => (
        <Shape key={produto.id} onClick={() => addToCart({ id: produto.id, name: produto.name, price: produto.price })}>
          <h1>{produto.name}</h1>
          <p>{produto.description}</p>
          <img className={produto.id === 'bolo' ?  'Bolo' : produto.id === 'cha_gelado' ? 'ChaGelado' : produto.id === 'cha_morango' ? 'Morango' : ''} src={produto.img} alt={produto.name} />
          <h1 className="preco">R$ {produto.price.toFixed(2)}</h1>
        </Shape>
      ))}
    </Colecao>
  );
};

export default Produto;