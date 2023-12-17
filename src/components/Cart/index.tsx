import React from "react";
import CartItem from "@/components/CartItem";
import CartLogo from "@/assets/images/cart.svg";
import "./cart.scss";
import UiButton from "@/components/UI/Button";
import { useSelector } from "react-redux";
const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const products = useSelector((state) => state.cart.items); //Массив продуктов
  return (
    <div className="cart">
      <div className="cart__container">
        <img src={CartLogo} alt="cart" onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="popup">
          <div className="popup__container">
            <h4 className="popup__title">Cart</h4>
            <ul className="popup__items">
              {products.length !== 0 ? (
                products.map((product) => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))
              ) : (
                <li className="popup__empty">
                  <h2 className="popup__empty-title">Корзина пустая</h2>
                </li>
              )}
            </ul>
            <div className="popup__btn">
              <UiButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
