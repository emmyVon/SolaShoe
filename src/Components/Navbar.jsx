import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "../Cart";
import { ReactComponent as Carticon } from "../images/icon-cart.svg";
import avater from "../images/image-avatar.png";
import { Link } from "react-router-dom";
import { Account } from "../utils/wallet";

export const Navbar = ({ setMenu, Menu, setCart, itemNo, cart, onOpen }) => {
  const [displayCart, setDisplayCart] = useState(false);

  const price = 125;
  const sum = (quantity) => price * quantity;
  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-left">
          {/* <div></div> */}
          <img src={menu} alt="menu" onClick={() => setMenu(true)} />
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>

          <ul className={Menu ? "showmenu menu" : "menu"}>
            <img src={close} alt="close" onClick={() => setMenu(false)} />
            <Link to={"/Shoe"}>Inventory</Link>
            <Link to={"/"}>Home</Link>

            {/* <li>About</li>
            <li>Contact</li> */}
          </ul>
          {displayCart && (
            <Cart
              sum={sum}
              price={price}
              itemNo={itemNo}
              cart={cart}
              setCart={setCart}
            />
          )}
        </div>
        <div className="nav-right">
          <div className="wallet" onClick={() => onOpen()}>
            {Account.checkBalance()}
          </div>
          <div>
            {cart.length > 0 ? (
              <div className="cart-item">{cart.length}</div>
            ) : (
              ""
            )}
            <Carticon onClick={() => setDisplayCart((prev) => !prev)} />
          </div>
          <img src={avater} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};
