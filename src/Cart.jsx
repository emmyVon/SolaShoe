import React from "react";

import deleteIcon from "./images/icon-delete.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // const shipFee = 12;
  let { amount } = cart.reduce(
    (total, item) => {
      const { quantity, price } = item;
      total.amount += price * quantity;
      total.items = +quantity;
      return total;
    },
    { amount: 0, items: 0 }
  );
  amount = parseFloat(amount.toFixed(2));
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => {
          console.log(item);
          return (
            <div className="cart-info">
              <div>
                <img src={item.image} alt="pro1" />
                <div>
                  <p>{item.name}</p>
                  <p>
                    ${item.price} x {item.quantity}{" "}
                    <div
                      style={{ display: "inline-block", fontWeight: "bold" }}
                    >
                      {item.price * item.quantity}
                    </div>
                  </p>
                  <p>{item.color}</p>
                </div>
                <img
                  src={deleteIcon}
                  onClick={() =>
                    setCart((prev) => {
                      const restitems = prev.filter((shoe) => shoe !== item);
                      return [...restitems];
                    })
                  }
                  alt="delete"
                />
              </div>
            </div>
          );
        })
      )}
      <hr />
      <div>
        <p>
          Subtotal:<span>${amount}</span>
        </p>
      </div>
      <Link to="/checkout">checkout</Link>
    </div>
  );
};

export default Cart;
