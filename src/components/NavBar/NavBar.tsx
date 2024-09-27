import { Nav } from "./styles";

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <a className="nostyle" href="#Novidades">
            Novidades
          </a>
        </li>
        <li>
          <a className="nostyle" href="#Sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className="nostyle" href="#Produtos">
            Produtos
          </a>
        </li>
        <li>
          <a className="nostyle" href="#Contato">
            Contato
          </a>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
