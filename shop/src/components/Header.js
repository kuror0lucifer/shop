import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return <div className="cart-nothing">Корзина пуста!</div>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className="logo">
        <span>House Stuff</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-btn ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
