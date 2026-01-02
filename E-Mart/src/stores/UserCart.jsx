import React, { useState } from "react";
import { useCart } from "./context/CartContext";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [msg, setMsg] = useState("");

  const removeHandler = (id) => {
    removeFromCart(id);
    setMsg("Item removed from cart");
    setTimeout(() => setMsg(""), 1200);
  };

  if (cartItems.length === 0)
    return <h2 className="empty-cart">Your Cart is Empty 🛒</h2>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {msg && <p className="cart-msg">{msg}</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => removeHandler(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <span>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</span>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default UserCart;
