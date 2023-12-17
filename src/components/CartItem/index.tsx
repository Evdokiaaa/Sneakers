import React from "react";
import "./cartitem.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "@/store/cartSlice";

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <li className="popup__item">
      <img className="popup__image" src={img} alt={title} />
      <div className="popup__item-info">
        <h4 className="popup__item-title">{title}</h4>
        <p className="popup__price">
          <span className="popup__item-price ">${price}&nbsp;</span>
          <span>x</span>
          <span className="popup__item-quantity">&nbsp;{quantity}&nbsp;</span>
          <span className="popup__item-final-price">${price * quantity}</span>
        </p>
      </div>

      <img
        src="src\assets\images\icon-delete.svg"
        alt="delete"
        onClick={() => handleRemoveItem(id)}
      />
    </li>
  );
};

export default CartItem;
