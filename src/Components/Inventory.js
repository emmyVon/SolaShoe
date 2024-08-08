import { Shoe } from "./shoe";
import "./Inventory.css";

const Inventory = ({ shoes }) => {
  return (
    <div className="invent">
      <div className="container invent-con">
        {Object.entries(shoes).map(([grp, shoe]) => {
          console.log(shoes);
          return <Shoe key={grp} shoe={shoe} grp={grp} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;
