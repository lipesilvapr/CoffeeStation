import Produto from "../Produto/Produto";
import { Categoria } from "./styles";

function Menu() {
  return (
    <Categoria>
      <p>Cafés Especiais</p>
      <Produto/>
    </Categoria>
  );
}

export default Menu;
