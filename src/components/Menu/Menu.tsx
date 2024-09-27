import Produto from "../Produto/Produto";
import { Categoria } from "./styles";

function Menu() {
  return (
    <Categoria>
      <p className="titulo">Cafés Especiais</p>
      <Produto type="especiais"/>
      <p className="titulo">Cafés Artesanais</p>
      <Produto type="artesanais"/>
      <p className="titulo">Lanches Deliciosos (Unidade/Fatia)</p>
      <Produto type="lanches"/>
    </Categoria>
  );
}

export default Menu;
