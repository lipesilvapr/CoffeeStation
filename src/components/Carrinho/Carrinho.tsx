import { Fixed, MergeCart } from "./styles";
import cart from "../../assets/cart.svg";
import { useState } from "react";

function Carrinho() {
  const [isSliding, setIsSliding] = useState(false);

  const handleClick = () => {
    setIsSliding(!isSliding);
  };
  return (
    <MergeCart>
        <Fixed>
          <div
            onClick={handleClick}
            className={`geral ${isSliding ? "slide-left" : ""}`}
          >
            <div className="car">
              <img src={cart} />
            </div>
            <div className="fullCart">
              <div className="headCart">
                <h1>Seu Carrinho</h1>
              </div>
              <div className="infoCar">
                <p>teste</p>
              </div>
            </div>
          </div>
        </Fixed>
        <div onClick={handleClick} className={`backSelection ${isSliding ? "on" : ""}`} />
    </MergeCart>
    
  );
}

export default Carrinho;
