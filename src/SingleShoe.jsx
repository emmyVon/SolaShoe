import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { ReactComponent as Carticon } from "./images/icon-cart.svg";

import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import Display from "./Display";

export function SingleShoe({
  shoes,
  setMenu,
  Menu,
  setCart,
  itemNo,
  cart,
  setItemNo,
}) {
  const { id } = useParams();
  const InterstShoe = shoes[id];

  if (!InterstShoe || InterstShoe.length < 0) {
    return <div>Shoe not found</div>;
  }

  const minusBtn = () => {
    setItemNo((prev) => (prev === 0 ? 0 : prev - 1));
    if (itemNo === 0) {
      setCart({ ...cart, Added: false });
    }
    return cart;
  };

  const AddtoCart = () => {
    if (InterstShoe && InterstShoe.length > 0) {
      const newItem = { ...InterstShoe[0], quantity: itemNo };
      const InCart = cart.findIndex(
        (item) => item.name === newItem.name && item.color === newItem.color
      );
      if (InCart === -1) {
        setCart([...cart, newItem]);
      } else {
        const UpdateItem = [...cart];
        UpdateItem[InCart].quantity += itemNo;
        setCart(UpdateItem);
      }
    }
    if (!InterstShoe || InterstShoe.length === 0) {
      return <div>Shoe not found</div>;
    }
    console.log(cart);
  };

  return (
    <div className="App">
      <section>
        <div
          className={
            Menu
              ? "container product-container overlay"
              : "container product-container"
          }
        >
          <Display shoe={InterstShoe} />
          <div className="text-side">
            <h3>Sneakers</h3>
            <h1>{id}</h1>
            <p>
              enim facilisis gravida neque convallis a cras semper auctor neque
              vitae tempus quam pellentesque nec nam aliquam sem et tortor
              consequat id porta nibh venenatis
            </p>
            <div>
              <h1>
                ${InterstShoe && InterstShoe.length > 0 && InterstShoe[0].price}
              </h1>
              <p
                style={{
                  textDecoration: "line-through",
                  fontWeight: "bolder",
                  opacity: "0.4",
                }}
              >
                $250.00
              </p>
              <p>
                {InterstShoe && InterstShoe.length > 0 && InterstShoe[0].color}
              </p>
            </div>
            <div className="button-container">
              <button>
                <img src={minus} onClick={minusBtn} alt="minus-icon" />
                <h2>{itemNo}</h2>
                <img
                  src={plus}
                  onClick={() => setItemNo((prev) => prev + 1)}
                  alt="plus-icon"
                />
              </button>
              <button onClick={AddtoCart}>
                <div className="carticon">
                  <Carticon />
                </div>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// onClick={() => setCart({ ...cart, empty: false, Added: true })}
