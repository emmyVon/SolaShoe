import { SingleShoe } from "./SingleShoe";
import Inventory from "./Components/Inventory";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GB from "./images/k-black.jpeg";
import LB from "./images/l-black..jpeg";
import LR from "./images/l-brown..jpeg";
import GR from "./images/k-brown.jpeg";
import AWP from "./images/w-pink.jpg";
import AWR from "./images/w-brown..jpeg";
import AWB from "./images/w-black..jpeg";
import PCB from "./images/R-black..jpeg";
import PCR from "./images/R-brown.jpeg";
import PCU from "./images/R-blue..jpeg";
import TGB from "./images/t-black.webp";
import TGR from "./images/t-brown.jpeg";
import ZLR from "./images/z-brown..jpeg";
import ZLB from "./images/z-black..jpeg";
import MGB from "./images/y-black..jpeg";
import MGR from "./images/y-brown..jpeg";
import MGU from "./images/y-blue..jpeg";
import { Landing } from "./Components/Landing";
import { Navbar } from "./Components/Navbar";

import { useEffect, useState } from "react";
import { Checkout } from "./Components/Checkout";
import { WalletModal } from "./Components/WalletModal";

const shoesList = [
  {
    image: GB,
    name: "Gucci",
    price: 2,
    color: "black",
  },
  { image: LB, name: "LV higtower", price: 2, color: "black" },
  {
    image: LR,
    name: "LV higtower",
    price: 2,
    color: "brown",
  },
  {
    image: GR,
    name: "Gucci",
    price: 2,
    color: "brown",
  },
  {
    image: AWP,
    name: "Angel wing",
    price: 2,
    color: "pink",
  },
  {
    image: AWR,
    name: "Angel wing",
    price: 2,
    color: "brown",
  },
  {
    image: AWB,
    name: "Angel wing",
    price: 2,
    color: "black",
  },
  {
    image: PCB,
    name: "Paris Court",
    price: 2,
    color: "black",
  },
  {
    image: PCR,
    name: "Paris Court",
    price: 2,
    color: "brown",
  },
  {
    image: PCU,
    name: "Paris Court",
    price: 2,
    color: "blue",
  },
  {
    image: TGB,
    name: "Italian Fendi",
    price: 2,
    color: "black",
  },
  {
    image: TGR,
    name: "Italian Fendi",
    price: 2,
    color: "brown",
  },
  {
    image: ZLR,
    name: "Zion Leather",
    price: 2,
    color: "brown",
  },
  {
    image: ZLB,
    name: "Zion Leather",
    price: 2,
    color: "Black",
  },
  {
    image: MGR,
    name: "Mascot Gold",
    price: 2,
    color: "brown",
  },
  {
    image: MGB,
    name: "Mascot Gold",
    price: 2,
    color: "Black",
  },
  { image: ZLB, name: "Hound Tower", price: 2, color: "black" },
  {
    image: LR,
    name: "Curtis Jones",
    price: 2,
    color: "brown",
  },
  {
    image: MGU,
    name: "Mascot Gold",
    price: 2,
    color: "Blue",
  },
  {
    image: TGB,
    name: "Playboy",
    price: 2,
    color: "black",
  },
  {
    image: TGR,
    name: "Playboy",
    price: 2,
    color: "brown",
  },
];

export const App = () => {
  const [showMenu, setShowmenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemNo, setItemNo] = useState(0);
  const [walletmodal, setmodal] = useState(false);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      // Initialize the cart in local storage if not present
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  const grp = shoesList.reduce((total, shoegrp) => {
    if (!total[shoegrp.name]) {
      total[shoegrp.name] = [];
    }
    total[shoegrp.name].push(shoegrp);

    return total;
  }, {});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const onclose = () => {
    setmodal(false);
  };
  const onOpen = () => {
    setmodal((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Navbar
        onOpen={onOpen}
        setMenu={setShowmenu}
        Menu={showMenu}
        setCart={setCart}
        itemNo={itemNo}
        cart={cart}
      />
      {walletmodal && <WalletModal onclose={onclose} />}
      <main
        style={{ marginTop: "5.3rem" }}
        className={walletmodal ? "modaloverlay" : ""}
      >
        <Routes>
          <Route path="/" element={<Landing shoes={grp} />} />
          <Route path="/Shoe" element={<Inventory shoes={grp} />} />
          <Route
            path="/shoe/:id"
            element={
              <SingleShoe
                setMenu={setShowmenu}
                Menu={showMenu}
                setCart={setCart}
                itemNo={itemNo}
                cart={cart}
                shoes={grp}
                setItemNo={setItemNo}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
