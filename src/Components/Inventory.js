import { Shoe } from "./shoe";
import "./Inventory.css";
import { useEffect, useState } from "react";

const Inventory = ({ shoes }) => {
  const [search, setSearch] = useState("");
  const [shoegrp, setShoes] = useState(shoes);

  useEffect(() => {
    const shoeobj = shoes;
    const timeout = setTimeout(() => {
      if (search) {
        const searchitems = Object.entries(shoeobj).filter(([brand]) =>
          brand.toLowerCase().includes(search.toLowerCase())
        );
        setShoes(Object.fromEntries(searchitems));
      } else {
        setShoes(shoes);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, shoes]);
  const handleinputchange = (e) => {
    setSearch(e.target.value);
  };
  // console.log(shoes);

  return (
    <div className="invent" value={search} onChange={handleinputchange}>
      <input type="text" className="search" />
      <div className="container invent-con">
        {Object.entries(shoegrp).map(([grp, shoe]) => {
          return <Shoe key={grp} shoe={shoe} grp={grp} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;
