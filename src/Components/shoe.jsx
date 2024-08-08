import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Shoe = ({ shoe, grp }) => {
  // const [selectedColor, setSelectedColor] = useState(shoe[0].color);
  const [displayedshoe, setdisplayedShoe] = useState(shoe[0]);

  const selectshoe = (color) => {
    const shoeindex = shoe.findIndex((shoe) => shoe.color === color);

    setdisplayedShoe(shoe[shoeindex]);
  };
  const Acolors = [...new Set(shoe.map((shoe) => shoe.color))];

  return (
    <div className="shoe">
      <div>
        <img src={displayedshoe.image} alt="alt" />
      </div>
      <Link to={`/shoe/${grp}`}>
        <div className="shoe-price">
          {Acolors.map((color, index) => (
            <button
              onClick={() => selectshoe(color)}
              key={index}
              style={{
                backgroundColor: color,
                borderRadius: "50%",
                height: "1rem",
                width: "1rem",
              }}
            ></button>
          ))}
          <p>{grp}</p>
          <p>${shoe[0].price}</p>
        </div>
      </Link>
    </div>
  );
};
