import { Fixed, MergeCart } from "./styles";
import Cart from "../../assets/cart.svg";
import { useState } from "react";
import { useCart } from "../../context/CarrinhoContext";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import Botao from "../Botao/Botao";

function Carrinho() {
  const { cart, updateQuantity } = useCart();
  const [isSliding, setIsSliding] = useState(false);

  const handleClick = () => {
    setIsSliding(!isSliding);
  };

  const increaseQuantity = (itemId: string) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, (item.quantity || 1) + 1);
    }
  };

  const decreaseQuantity = (itemId: string) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, (item.quantity || 1) - 1);
    }
  };

  return (
    <MergeCart>
      <Fixed>
        <div className={`geral ${isSliding ? "slide-left" : ""}`}>
          <div className="car" onClick={handleClick}>
            <img src={Cart} alt="Carrinho" />
          </div>
          <div className="fullCart">
            <div className="headCart">
              <h1>Seu Carrinho</h1>
            </div>
            <div className="infoCar">
              <div className="lista">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.id} className="item">
                      <div className="primeiraParte">
                        <img
                          className={
                            item.id === "cha_gelado" ? "imgGelado" : "itemImg"
                          }
                          src={item.img}
                        />
                        <p>
                          {item.name} - R$ {item.price.toFixed(2)} x
                          {item.quantity}
                        </p>
                      </div>
                      <div>
                        <img
                          src={Plus}
                          onClick={() => increaseQuantity(item.id)}
                        />
                        <img
                          src={Minus}
                          onClick={() => decreaseQuantity(item.id)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="vazio">Carrinho vazio</p>
                )}
              </div>
              <div className="total">
                <div className="textTotal">
                  <p>Total:</p>
                  <p className="precoTotal">
                    R${" "}
                    {cart
                      .reduce(
                        (acc, item) => acc + item.price * (item.quantity || 0),
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <div className="bts">
                  <Botao text="Sair" color="#F00" onClick={handleClick}/>
                  <Botao text="Continuar" color="#0FA958" onClick={handleClick}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fixed>
      <div
        onClick={handleClick}
        className={`backSelection ${isSliding ? "on" : ""}`}
      />
    </MergeCart>
  );
}

export default Carrinho;
