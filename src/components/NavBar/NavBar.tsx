import { useState } from "react";
import { Nav } from "./styles";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
  return (
    <Nav>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <li className='nav-item'>
              <a className="nostyle" href='#Novidades'>Novidades</a>
            </li>
            <li className='nav-item'>
              <a className="nostyle" href='#Sobre'>Sobre</a>
            </li>
            <li className='nav-item'>
              <a className="nostyle" href='#Produtos'>Produtos</a>
            </li>
            <li className='nav-item'>
              <a className="nostyle" href='#Contato'>Contato</a>
            </li>
          </ul>
          <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
    </Nav>
  );
}

export default NavBar;
