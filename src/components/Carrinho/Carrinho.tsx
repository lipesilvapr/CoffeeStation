import { Fixed, MergeCart } from "./styles";
import Cart from "../../assets/cart.svg";
import { useState } from "react";
import { useCart } from "../../context/CarrinhoContext";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import Botao from "../Botao/Botao";
import CartFill from "../../assets/cartFill.svg";

function Carrinho() {
  const { cart, updateQuantity } = useCart();
  const [isSliding, setIsSliding] = useState(false);

  const handleClick = () => {
    setIsSliding(!isSliding);
  };

  const handleBuy = () => {
    alert("Compra realizada com sucesso")
  }

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
          <div className={`car ${isSliding ? "hide" : ""} ${cart.length > 0 ? "add-items" : ""}`} onClick={handleClick}>
            <img src={cart.length > 0 ? CartFill : Cart} alt="Carrinho" className={`carrinho ${cart.length > 0  ? "with-items" : ""}`}/>
            <p className={`${cart.length> 0 ? "quantity" : "hide"}`}>{cart.reduce((acc, item) => acc + (item.quantity || 0), 0)}</p>
          </div>
        <div className={`geral ${isSliding ? "slide-left" : ""}`}>
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
                  <Botao text="Sair" color="#F00" onClick={handleClick} textColor="white"/>
                  <Botao text="Continuar" color="#0FA958" onClick={handleBuy} textColor="white"/>
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
