import React from "react";

export const Checkout = ({ cart }) => {
  const shipFee = 12;
  let { amount, items } = cart.reduce(
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
    <div>
      <div className="container check-con">
        <div className="check-right">
          <div className="btn-grp">
            <button>PayPal</button>
            <button>Credit Card</button>
          </div>
          <div className="btn-grp">
            <button>Visa</button>
            <button>MasterCard</button>
          </div>
          <label htmlFor="Card No">
            CARD NUMBER
            <input type="number" />
          </label>
          <label htmlFor="Card Hold">
            CARD HOLDER
            <input type="number" />
          </label>
          <div className="date">
            <label htmlFor="exp">
              EXP Date
              <input type="number" />
            </label>
            <label htmlFor="cvc">
              CVC
              <input type="number" required />
            </label>
          </div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" required />
            Save Card
          </label>
        </div>
        <div className="check-left">
          <h2>Your Order</h2>
          {cart.length > 0 &&
            cart.map((item) => (
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
                  </div>
                </div>
              </div>
            ))}
          <div className="total">
            <p>
              Subtotal:<span>${amount}</span>
            </p>
            <p>
              Shipping Fee:<span>${shipFee}</span>
            </p>
            <hr />
            <p>
              Total:<span>${amount + shipFee}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
